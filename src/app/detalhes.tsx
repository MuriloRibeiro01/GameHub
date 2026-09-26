import { ThemedView } from "@/components/themed-view";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Share, ImageSourcePropType } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

type Jogador = {
    id: string,
    nome: string,
    disponivel: boolean,
    avatar: ImageSourcePropType,
};

const JOGADORES: Jogador[] = [
    {id: '1', nome: 'Tiago Luchtenberg', disponivel: true, avatar: require('../../public/GameHubImages/tiago.png')},
    {id: '2', nome: 'Rodrigo Gonçalves', disponivel: false, avatar: require('../../public/GameHubImages/rodrigo.png')},
    {id: '3', nome: 'Diego Fernandes', disponivel: false, avatar: require('../../public/GameHubImages/diego.png')},
];

export default function DetalhesPage() {

    const router = useRouter();
    const insets = useSafeAreaInsets();

    function voltar() {
        router.replace('/home');
    }

    function compartilhar() {
        Share.share({
            message: 'Bora jogar? Partida "Lendários" agendada no GameHub!',
        });
    }

    function renderJogador({ item }: { item: Jogador }) {
        return (
            <View style={styles.cardJogador}>
                <Image style={styles.avatar} source={item.avatar}/>
                <View style={styles.infoJogador}>
                    <Text style={[styles.textWhite, styles.nomeJogador]}>{item.nome}</Text>
                    <View style={styles.umDoLadinhoDoOutro}>
                        <View style={[styles.bolinha, item.disponivel ? styles.bolaVerde : styles.bolaVermelha]}/>
                        <Text style={styles.textStatus}>{item.disponivel ? 'Disponível' : 'Ocupado'}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <ThemedView style={styles.root}>
            <SafeAreaView edges={['bottom']} style={styles.detalhesContainer}>
                <View style={[styles.titleBtnContainer, { paddingTop: insets.top + 15 }]}>
                    <TouchableOpacity onPress={voltar}>
                        <Image source={require('../../public/GameHubImages/FrameSeta.png')}/>
                    </TouchableOpacity>
                    <Text style={[styles.textWhite, styles.headerTitle]}>Detalhes</Text>
                    <TouchableOpacity onPress={compartilhar}>
                        <Image source={require('../../public/GameHubImages/share.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.bannerContainer}>
                    <Image style={styles.preencher} source={require('../../public/GameHubImages/lol.png')}/>
                    <LinearGradient
                        colors={['rgba(14, 22, 69, 0.15)', 'rgba(14, 22, 69, 0.9)']}
                        style={StyleSheet.absoluteFill}
                    />
                    <View style={styles.textoBanner}>
                        <Text style={[styles.textWhite, styles.bannerTitle]}>Lendários</Text>
                        <Text style={[styles.textWhite, styles.bannerSubtitle]}>É hoje que vamos chegar ao challenger sem{'\n'}perder uma partida da md10</Text>
                    </View>
                </View>

                <View style={styles.jogadoresContainer}>
                    <View style={styles.jogadoresHeader}>
                        <Text style={[styles.textWhite, styles.subTitulo]}>Jogadores</Text>
                        <Text style={styles.textGray}>Total {JOGADORES.length}</Text>
                    </View>

                    <FlatList
                        data={JOGADORES}
                        keyExtractor={item => item.id}
                        renderItem={renderJogador}
                        ItemSeparatorComponent={() => <View style={styles.separador}/>}
                    />
                </View>

                <TouchableOpacity style={styles.entrarBtn}>
                    <View style={styles.iconeBtn}>
                        <Image source={require('../../public/GameHubImages/Vector.png')}/>
                    </View>
                    <View style={styles.divisor}/>
                    <Text style={[styles.textWhite, styles.entrarText]}>Entrar na partida</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    detalhesContainer: {
        flex: 1,
        backgroundColor: '#0e1645',
    },
    titleBtnContainer: {
        paddingHorizontal: 20,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1D2766',
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Rajdhani_Bold',
    },
    textWhite: {
        color: 'white',
    },
    textGray: {
        color: '#ABB1CC',
    },
    bannerContainer: {
        height: 234,
    },
    preencher: {
        width: '100%',
        height: 234,
        resizeMode: 'cover',
    },
    textoBanner: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 20,
        gap: 8,
    },
    bannerTitle: {
        fontSize: 28,
        fontFamily: 'Rajdhani_Bold',
    },
    bannerSubtitle: {
        fontSize: 13,
        lineHeight: 21,
    },
    jogadoresContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 24,
    },
    jogadoresHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    subTitulo: {
        fontSize: 18,
        fontFamily: 'Rajdhani_Bold',
    },
    cardJogador: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
    },
    infoJogador: {
        gap: 4,
    },
    nomeJogador: {
        fontSize: 18,
        fontFamily: 'Rajdhani_Bold',
    },
    umDoLadinhoDoOutro: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    bolinha: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    bolaVerde: {
        backgroundColor: '#32BD50',
    },
    bolaVermelha: {
        backgroundColor: '#E51C44',
    },
    textStatus: {
        color: '#ABB1CC',
        fontSize: 13,
    },
    separador: {
        height: 1,
        backgroundColor: '#1D2766',
        marginLeft: 52,
    },
    entrarBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#E51C44',
        borderRadius: 8,
    },
    iconeBtn: {
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divisor: {
        backgroundColor: '#991F36',
        width: 1,
        height: '100%',
    },
    entrarText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
    },
})
