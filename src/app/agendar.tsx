import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
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
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                    <Text style={styles.textWhite}>Agendar partida</Text>
                </View>

                <View>
                    <Text>Categoria</Text>
                    <View>

                    </View>
                </View>

                <View>
                    
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
        backgroundColor: 'red'

    },
    titleBtnContainer: {
        gap: 15,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textWhite: {
        color: 'white',
    },
});