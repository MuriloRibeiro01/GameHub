import { ThemedView } from "@/components/themed-view";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {

    const router = useRouter();

    function agendar() {

        router.replace('/agendar');

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

                </View>
                <View style={styles.partidasAgendadas}>
                    <View style={styles.partidasOpcoes}>

                    </View>
                </View>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
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
        backgroundColor: 'white',
        borderColor: 'black',
        margin: 1,
    },
    partidasAgendadas: {
        backgroundColor: 'white',
        borderColor: 'black',
        margin: 1,
    },
    partidasOpcoes:{ 
        backgroundColor: 'blue',
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
    }
})