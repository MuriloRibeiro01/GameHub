import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Agendamento() {

    const router = useRouter();

    function voltar() {
        router.replace('/home');
    }

    return (
        <ThemedView style={styles.root}>
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.titleBtnContainer}>
                    <TouchableOpacity onPress={voltar} style={styles.voltarBtn}>
                        <Text style={styles.voltarBtnText}>Voltar</Text>
                    </TouchableOpacity>
                    <Text style={[styles.textWhite, styles.pageTitle, styles.textBold]}>Agendar partida</Text>
                </View>

                <View style={styles.categoriaContainer}>
                    <Text style={[styles.textWhite, styles.textBold, styles.pageTitle]}>Categoria</Text>
                    <View>
                        <View style={styles.gameMode}>
                            <View style={styles.scrollBox}>
                                <Image source={require('../../public/GameHubImages/Icon.png')} style={styles.modeImages}/>
                                <Text style={styles.scrollBoxText}>Ranqueada</Text>
                            </View>
                            <View style={styles.scrollBox}>
                                <Image source={require('../../public/GameHubImages/Icon(1).png')} style={styles.modeImages}/>
                                <Text style={styles.scrollBoxText}>Duelo X1</Text>
                            </View>
                            <View style={styles.scrollBox}>
                                <Image source={require('../../public/GameHubImages/Group.png')} style={styles.modeImages}/>
                                <Text style={styles.scrollBoxText}>Diversão</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View></View>
                    <Text>Selecione um servidor</Text>
                </View>

                <View>
                    <View>
                        <Text>
                            Dia e mês
                        </Text>
                        <Text>
                            Hora e minuto
                        </Text>
                    </View>
                    <View>

                    </View>
                </View>

                <View>
                    <View>
                        <Text>
                            Descrição
                        </Text>
                        <Text>
                            Max 100 caracteres
                        </Text>
                    </View>

                    <View>
                        
                    </View>
                </View>

                <TouchableOpacity>
                    <Text>Agendar</Text>
                </TouchableOpacity>
            </SafeAreaView>            
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    safeContainer: {
        backgroundColor: '#1a245f',
    },
    container: {
        backgroundColor: '#0e1544',
        height: '100%',
    },
    voltarBtn: {
        backgroundColor: 'red',
    },
    voltarBtnText: {

    },
    titleBtnContainer: {
        padding: 15,
        gap: 15,
        flexDirection: 'row',
    },
    textWhite: {
        color: 'white',
    },
    categoriaContainer: {
        backgroundColor: '#0e1645',
    },
    gameMode: {
        flexDirection: 'row',
        backgroundColor: '#0e1645',
        borderColor: 'black',
        margin: 10,
        height: 100,
        justifyContent: 'space-around',
    },
    scrollBox: {
        backgroundColor: '#1D2766',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#7380d0',
        height: 100,
        alignItems: 'center',
        gap: 5,
        width: 100,
    },
    scrollBoxText: {
        color: 'white',
        fontWeight: 'bold',
    },
    modeImages: {
        width: 48,
        height: 48,
    },
    pageTitle: {
        fontSize: 18,
    },
    textBold: {
        fontWeight: 'bold',
    },
});