import { ThemedView } from "@/components/themed-view";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage() {
    
    function entrar() {
        const router = useRouter();

        router.replace('/agendar');
    }

    return (
        <ThemedView>
            <SafeAreaView style={styles.loginContainer}>
                <LinearGradient colors={['#0e1645', 'transparent']} style={styles.gradient}/>
                <Image style={styles.loginImage} source={require('../../public/GameHubImages/Image.png')}/>
                <View style={styles.textView}>
                    <Text style={styles.loginSubTitle}>Conecte-se e organize suas partidas</Text>
                </View>
                <TouchableOpacity onPress={entrar} style={styles.loginBtn}>
                    <Image source={require('../../public/GameHubImages/Vector.png')}/>
                    <Text style={styles.loginText}>Entrar com Discord</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ThemedView>
    );  

}

const styles = StyleSheet.create({
    loginImage: {
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        width: '220%',
    },
    loginBtn: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#E51C44',
        padding: 15,
        borderRadius: 5,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    loginContainer: {
        alignItems: 'center',
        backgroundColor: '#0e1645',
    },
    loginSubTitle: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    textView: {
        padding: 5,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
})