import { ThemedView } from "@/components/themed-view";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {

    const router = useRouter();

    function agendar() {
        router.replace('/agendar');
    }

    function detalhes() {
        router.replace('/detalhes');
    }
    return (
        <ThemedView style={styles.root}>
            <SafeAreaView style={styles.homeContainer}>
                <View style={styles.welcome}>
                    <Image source={require('../../public/GameHubImages/profile-pic.png')}/>
                    <View style={styles.greetingsContainer}>
                        <Text style={styles.greetings}>
                            Olá, Tiago
                        </Text>
                        <Text style={styles.subGreetings}>
                            Hoje é dia de vitória
                        </Text>
                    </View>
                    <TouchableOpacity onPress={agendar} style={styles.agendarBtn}>
                        <Text style={styles.btnTextStyle}>+</Text>
                    </TouchableOpacity>
                </View>
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
                <View style={styles.partidasAgendadas}>
                    <View style={styles.partidasOpcoes}>
                        <View style={styles.titulocanal}>
                            <Text style={styles.titulo}>Partidas agendadas</Text>
                            <Text style={styles.counter}>Total 6</Text>
                        </View>                        
                        <ScrollView style={styles.partidas}>
                            <TouchableOpacity onPress={detalhes} style={styles.scrollPartidas}>
                                <Image style={styles.gameImg} source={require('../../public/GameHubImages/Rectangle.png')} />
                                
                                <View style={styles.scrollPartidaDetalhesEsquerda}>
                                    <Text style={[styles.textWhite, styles.textBold]}>Lendários</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame.png')} />
                                        <Text style={styles.textWhite}>18/06 às 21:00h</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.scrollPartidaDetalhesDireita}>
                                    <Text style={styles.textGray}>Ranqueada</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame(1).png')} />
                                        <Text style={styles.textRed}>Anfitrião</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.scrollPartidas}>
                                <Image style={styles.gameImg} source={require('../../public/GameHubImages/reddead.png')} />
                                
                                <View style={styles.scrollPartidaDetalhesEsquerda}>
                                    <Text style={[styles.textWhite, styles.textBold]}>Yeah, boy</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame.png')} />
                                        <Text style={styles.textWhite}>23/06 às 19:00h</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.scrollPartidaDetalhesDireita}>
                                    <Text style={styles.textGray}>Diversão</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/VectorGreen.png')} />
                                        <Text style={styles.textGreen}>Anfitrião</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.scrollPartidas}>
                                <Image style={styles.gameImg} source={require('../../public/GameHubImages/cs.png')} />
                                
                                <View style={styles.scrollPartidaDetalhesEsquerda}>
                                    <Text style={[styles.textWhite, styles.textBold]}>Rumo ao topo</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame.png')} />
                                        <Text style={styles.textWhite}>20/06 às 09:00h</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.scrollPartidaDetalhesDireita}>
                                    <Text style={styles.textGray}>1x1</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame(1).png')} />
                                        <Text style={styles.textRed}>Anfitrião</Text>
                                    </View>
                                </View>
                            </View> 

                            <View style={styles.scrollPartidas}>
                                <Image style={styles.gameImg} source={require('../../public/GameHubImages/apex.png')} />
                                
                                <View style={styles.scrollPartidaDetalhesEsquerda}>
                                    <Text style={[styles.textWhite, styles.textBold]}>Bora queimar tudo</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame.png')} />
                                        <Text style={styles.textWhite}>20/06 às 14:20h</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.scrollPartidaDetalhesDireita}>
                                    <Text style={styles.textGray}>Ranqueada</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame(1).png')} />
                                        <Text style={styles.textRed}>Anfitrião</Text>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={styles.scrollPartidas}>
                                <Image style={styles.gameImg} source={require('../../public/GameHubImages/valorant.png')} />
                                
                                <View style={styles.scrollPartidaDetalhesEsquerda}>
                                    <Text style={[styles.textWhite, styles.textBold]}>Valorosos</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame.png')} />
                                        <Text style={styles.textWhite}>18/06 às 21:00h</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.scrollPartidaDetalhesDireita}>
                                    <Text style={styles.textGray}>Diversão</Text>
                                    <View style={styles.person}>
                                        <Image source={require('../../public/GameHubImages/Frame(1).png')} />
                                        <Text style={styles.textRed}>Anfitrião</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#0e1645',
        gap: 50,
    },
    root: {
        flex: 1,
    },
    welcome: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    gameMode: {
        flexDirection: 'row',
        backgroundColor: '#0e1645',
        borderColor: 'black',
        margin: 10,
        height: 100,
        justifyContent: 'space-around',
    },
    partidasAgendadas: {
        flex: 1,
        backgroundColor: '#0e1645',
        borderColor: 'black',
        margin: 20,
        padding: 2,
    },
    partidasOpcoes:{ 
        flex: 1,
        gap: 10
    },
    greetings: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subGreetings: {
        color: 'white',

    },
    agendarBtn: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextStyle: {
        fontSize: 30,
        color: 'white',
    },
    greetingsContainer: {
        paddingRight: 20,
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
        width: 38,
        height: 38,
    },
    scrollPartidas: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingBottom: 10,
        
    },
    scrollPartida: {

    },
    scrollPartidaDetalhesEsquerda: {
        flex: 1,
        padding: 5,
        gap: 8,
    },
    scrollPartidaDetalhesDireita: {
        padding: 5,
        gap: 8,
        alignItems: 'flex-end',
    },
    titulocanal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0e1645',
        paddingBottom: 5,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    partidas: {
        flex: 1,
        backgroundColor: '#0e1645',
    },
    counter: {
        color: 'gray'
    },
    person: {
        flexDirection: 'row',
        gap: 3,
    },
    textWhite: {
        color: 'white',
    },
    textRed: {
        color: 'red',
    },
    textGreen: {
        color: 'green',
    },
    textGray: {
        color: 'gray',
    },
    textBold: {
        fontWeight: 'bold',
    },
    gameImg: {
        width: 64,
        height: 68,
        borderRadius: 10,
        resizeMode: 'cover',
    },
})