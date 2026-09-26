import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet, Image } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

type ServerModalProps = {
    visible: boolean,
    onClose: () => void;
}

export default function ServerModal({visible, onClose}: ServerModalProps) {

    const translateY = useSharedValue(0);

    useEffect(() => { if (visible) translateY.value = 0; }, [visible]);

    const pan = Gesture.Pan
    
    const [serverEscolhido, setServerEscolhido] = useState(null);

    function escolherServer() {

    }

    return (
        <Modal style={styles.modalCorpo} visible={visible} onRequestClose={onClose} animationType="slide" transparent>
            <View style={styles.pullArea}>
                <View style={styles.barraModerna}>

                </View>
            </View>
            <ScrollView style={styles.scrollModal}>               

                <View style={styles.servidoresContainer}>
                    <TouchableOpacity style={styles.servidorDetalhes}>
                        <Image source={require('../../public/GameHubImages/cs.png')}/>
                        <View style={styles.servidorText}>
                            <Text style={[styles.textWhite, styles.textBold]}>
                                Rumo ao topo
                            </Text>
                            <Text style={styles.textGray}>
                                Administrador
                            </Text>
                        </View>
                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                    </TouchableOpacity>
                    <View style={styles.divisor}></View>

                    <TouchableOpacity style={styles.servidorDetalhes}>
                        <Image source={require('../../public/GameHubImages/apex.png')}/>
                        <View style={styles.servidorText}>
                            <Text style={[styles.textWhite, styles.textBold]}>
                                Rumo ao topo
                            </Text>
                            <Text style={styles.textGray}>
                                Administrador
                            </Text>
                        </View>
                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                    </TouchableOpacity>
                    <View style={styles.divisor}></View>

                    <TouchableOpacity style={styles.servidorDetalhes}>
                        <Image source={require('../../public/GameHubImages/reddead.png')}/>
                        <View style={styles.servidorText}>
                            <Text style={[styles.textWhite, styles.textBold]}>
                                Rumo ao topo
                            </Text>
                            <Text style={styles.textGray}>
                                Administrador
                            </Text>
                        </View>
                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                    </TouchableOpacity>
                    <View style={styles.divisor}></View>

                    <TouchableOpacity style={styles.servidorDetalhes}>
                        <Image source={require('../../public/GameHubImages/valorant.png')}/>
                        <View style={styles.servidorText}>
                            <Text style={[styles.textWhite, styles.textBold]}>
                                Rumo ao topo
                            </Text>
                            <Text style={styles.textGray}>
                                Administrador
                            </Text>
                        </View>
                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                    </TouchableOpacity>
                    <View style={styles.divisor}></View>

                    <TouchableOpacity style={styles.servidorDetalhes}>
                        <Image source={require('../../public/GameHubImages/gta.png')}/>
                        <View style={styles.servidorText}>
                            <Text style={[styles.textWhite, styles.textBold]}>
                                Rumo ao topo
                            </Text>
                            <Text style={styles.textGray}>
                                Administrador
                            </Text>
                        </View>
                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                    </TouchableOpacity>
                    <View style={styles.divisor}></View>

                    <TouchableOpacity style={styles.servidorDetalhes}>
                        <Image source={require('../../public/GameHubImages/mine.png')}/>
                        <View style={styles.servidorText}>
                            <Text style={[styles.textWhite, styles.textBold]}>
                                Rumo ao topo
                            </Text>
                            <Text style={styles.textGray}>
                                Administrador
                            </Text>
                        </View>
                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                    </TouchableOpacity>
                    <View style={styles.divisor}></View>

                    <TouchableOpacity style={styles.servidorDetalhes}>
                        <Image source={require('../../public/GameHubImages/battlefield.png')}/>
                        <View style={styles.servidorText}>
                            <Text style={[styles.textWhite, styles.textBold]}>
                                Rumo ao topo
                            </Text>
                            <Text style={styles.textGray}>
                                Administrador
                            </Text>
                        </View>
                        <Image source={require('../../public/GameHubImages/VectorSeta.png')}/>
                    </TouchableOpacity>
                    <View style={styles.divisor}></View>
                </View>
            </ScrollView>
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
        marginLeft: -130,
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
})