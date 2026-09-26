import { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet, Image } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { Servidor, SERVIDORES } from "@/constants/servidores";

type ServerModalProps = {
    visible: boolean;
    onClose: () => void;
    onSelect: (servidor: Servidor) => void;
};

export default function ServerModal({visible, onClose, onSelect}: ServerModalProps) {

    const translateY = useSharedValue(0);

    useEffect(() => { if (visible) translateY.value = 0; }, [visible]);

    const pan = Gesture.Pan()
        .onUpdate((e) => {
            translateY.value = Math.max(0, e.translationY);
        })
        .onEnd((e) => {
            const deveFechar = e.translationY > 150 || e.velocityY > 1000;
            if (deveFechar) {
                translateY.value = withTiming(1000, { duration: 200 }, () => {
                    scheduleOnRN(onClose);
                });
            } else {
                translateY.value = withSpring(0);
            }
        });


    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
    
    return (
        <Modal style={styles.modalCorpo} visible={visible} onRequestClose={onClose} animationType="slide" transparent>
            <GestureHandlerRootView style={styles.overlay}>
                <Animated.View style={[styles.sheet, animatedStyle]}>
                    <GestureDetector gesture={pan}>
                        <View style={styles.pullArea}>
                            <View style={styles.barraModerna}></View>
                        </View>
                    </GestureDetector>
                    <ScrollView style={styles.scrollModal}>               

                        <View style={styles.servidoresContainer}>
                            {SERVIDORES.map((s) => (
                                <View key={s.id}>
                                    <TouchableOpacity style={styles.servidorDetalhes} onPress={() => { onSelect(s); onClose(); }}>
                                        <Image source={s.imagem}/>
                                        <View style={styles.servidorText}>
                                            <Text style={[styles.textWhite, styles.textBold]}>{s.nome}</Text>
                                            <Text style={styles.textGray}>{s.jogo}</Text>
                                        </View>
                                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                                    </TouchableOpacity>
                                    <View style={styles.divisor}></View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </Animated.View>
            </GestureHandlerRootView>
        </Modal>
        
    );

}

const styles = StyleSheet.create({
    scrollModal: {
        backgroundColor: '#0e1544',
        height: 800,
    },
    servidoresContainer: {
        margin: 20,
    },
    servidorDetalhes: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    servidorText: {
        flex: 1,
        marginLeft: 15,
    },
    divisor: {
        height: 1,
        width: 300,
        backgroundColor: '#1a245f',
        alignSelf: 'center',
    },
    textWhite: {
        color: 'white',
    },
    textBold: {
        fontWeight: 'bold',
    },
    textGray: {
        color: 'gray',
    },
    barraModerna: {
        margin: 5,
        alignSelf: 'center',
        width: 50,
        height: 5,
        borderRadius: 10,
        backgroundColor: '#4151b9',
    },
    modalCorpo: {
    },

    pullArea: {
        backgroundColor: '#1a245f',
        height: 30,
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',            // cola o sheet no fundo da tela
        backgroundColor: 'rgba(0,0,0,0.5)',    // opcional: escurece o fundo
    },
    sheet: {
        maxHeight: '90%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },

})
