import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Touchable } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CheckBox from 'expo-checkbox';
import { useState } from "react";
import ServerModal from "./server-modal";

export default function Agendamento() {

    const router = useRouter();

    function voltar() {
        router.replace('/home');
    }

    const [ranqueadaChecked, setRanqueadaChecked] = useState(false);
    const [x1Checked, setX1Checked] = useState(false);
    const [diversaoChecked, setDiversaoChecked] = useState(false);
    const [categoriaChecked, setCategoriaChecked] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);

    function marcarRanqueada() {
        setRanqueadaChecked(valor => !valor);
    }
    function marcarX1() {
        setX1Checked(valor => !valor);
    }
    function marcarDiversao() {
        setDiversaoChecked(valor => !valor);
    }

    return (
        <ThemedView style={styles.root}>
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.titleBtnContainer}>
                    <TouchableOpacity onPress={voltar}>
                        <Image source={require('../../public/GameHubImages/FrameSeta.png')}/>
                    </TouchableOpacity>
                    <Text style={[styles.textWhite, styles.pageTitle, styles.textBold]}>Agendar partida</Text>
                </View>
                <View style={styles.categoriaContainer}>
                    <Text style={[styles.textWhite, styles.textBold, styles.pageTitle]}>Categoria</Text>
                    <View>
                        <View style={styles.gameMode}>
                            <TouchableOpacity onPress={marcarRanqueada} style={styles.scrollBox}>
                                <CheckBox value={ranqueadaChecked} onValueChange={setRanqueadaChecked} style={styles.checkCategoria}></CheckBox>
                                <Image source={require('../../public/GameHubImages/Icon.png')} style={styles.modeImages}/>
                                <Text style={styles.scrollBoxText}>Ranqueada</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={marcarX1} style={styles.scrollBox}>
                                <CheckBox value={x1Checked} onValueChange={setX1Checked} style={styles.checkCategoria}></CheckBox>
                                <Image source={require('../../public/GameHubImages/Icon(1).png')} style={styles.modeImages}/>
                                <Text style={styles.scrollBoxText}>Duelo X1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={marcarDiversao} style={styles.scrollBox}>
                                <CheckBox value={diversaoChecked} onValueChange={setDiversaoChecked} style={styles.checkCategoria}></CheckBox>
                                <Image source={require('../../public/GameHubImages/Group.png')} style={styles.modeImages}/>
                                <Text style={styles.scrollBoxText}>Diversão</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.serverContainer}>
                    <TouchableOpacity onPress={() => setModalAberto(true)} style={styles.serverBar}>
                        <View style={styles.quadrado}></View>
                        <Text style={[styles.textWhite, styles.textBold, styles.textCenter]}>Selecione um servidor</Text>
                    </TouchableOpacity> 

                    <ServerModal visible={modalAberto} onClose={() => setModalAberto(false)} />                   
                </View>

                <View style={styles.dateContainer}>
                    <View style={styles.textDateContainer}>
                        <Text style={[styles.textBold, styles.textWhite]}>
                            Dia e mês
                        </Text>
                        <Text style={[styles.textBold, styles.textWhite]}>
                            Hora e minuto
                        </Text>
                    </View>
                    <View style={styles.dateContainerPai}>

                        <View style={styles.dateContainerEsquerda}>
                            <View style={styles.dateCampo}></View>
                            <Text style={[styles.dateBar, styles.textWhite]}>/</Text>
                            <View style={styles.dateCampo}></View>
                        </View>
                        
                        <View style={styles.dateContainerDireita}>
                            <View style={styles.dateCampo}></View>
                            <Text style={[styles.dateBar, styles.textWhite]}>:</Text>
                            <View style={styles.dateCampo}></View>
                        </View>
                    </View>
                    
                </View>

                <View style={styles.descricaoContainer}>
                    <View style={styles.descricaoCabecalho}>
                        <Text style={[styles.textBold, styles.textWhite]}>
                            Descrição
                        </Text>
                        <Text style={[styles.textBold, styles.textGray]}>
                            Max 100 caracteres
                        </Text>
                    </View>

                    <View style={styles.descricaoCampo}>
                        
                    </View>
                </View>

                <View style={styles.btnAgendaContainer}>
                    <TouchableOpacity style={styles.btnAgendamento}>
                        <Text style={[styles.agendamentoTxt, styles.textWhite, styles.textBold]}>Agendar</Text>
                    </TouchableOpacity>
                </View>
                
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
        width: 38,
        height: 38,
    },
    pageTitle: {
        fontSize: 18,
    },
    textBold: {
        fontWeight: 'bold',
    },
    checkCategoria: {
        height: 10,
        width: 10,
        marginLeft: 60,
    },
    serverContainer: {
        backgroundColor: '#0e1645',
        alignItems: 'center',
    },
    serverBar: {
        marginTop: 5,
        width: 350,
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#0e1645',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
    },
    quadrado: {
        height: 68,
        width: 68,
        borderRadius: 10,
        backgroundColor: '#1a245f',
    },
    dateContainer: {
        backgroundColor: '#0e1645',
    },
    textDateContainer: {
        marginTop: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 5,
    },
    dateCampo: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
    },
    dateContainerDireita: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    dateContainerEsquerda: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    dateContainerPai: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    dateBar: {
        fontSize: 20,
    },
    descricaoContainer: {
        backgroundColor: '#0e1645',
        alignItems: 'center',
    },
    descricaoCabecalho: {
        width: '100%',
        marginTop: 5,
        backgroundColor: '#0e1645',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnAgendamento: {
        width: 200,
        height: 60,
        padding: 10,
        backgroundColor: '#e51c44',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnAgendaContainer: {
        alignItems: 'center',
        backgroundColor: '#0e1645',     
    },
    agendamentoTxt: {
        textAlign: 'center',
    },
    textCenter: {
        textAlign: 'center',
    },
    descricaoCampo: {
        marginTop: 5,
        backgroundColor: '#1a245f',
        height: 100,
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    textGray: {
        color: 'gray',
    },
});