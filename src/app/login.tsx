import { ThemedView } from "@/components/themed-view";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginPage() {
    
    const router = useRouter();

    function entrar() {
        router.replace('/home');
    }

    return (
        <ThemedView style={styles.loginRoot}>            
            <SafeAreaView style={styles.loginContainer}>
                <Image style={styles.loginImageBack} source={require('../../public/GameHubImages/Union.png')}/>
                <LinearGradient colors={['transparent', '#0c123b']} style={styles.gradient}/>
                <Image style={styles.loginImage} source={require('../../public/GameHubImages/Image.png')}/>                   
                <View style={styles.textView}>
                    <Text style={styles.loginSubTitle}>Conecte-se{'\n'}e organize suas{'\n'}jogatinas</Text>
                    <Text style={styles.loginSubText}>Crie grupos para jogar seus games{'\n'}
favoritos com seus amigos</Text>
                </View>
                <TouchableOpacity onPress={entrar} style={styles.loginBtn}>
                    <Image style={styles.discord} source={require('../../public/GameHubImages/Vector.png')}/>
                    <View style={styles.divisor}></View>
                    <Text style={styles.loginText}>Entrar com Discord</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ThemedView>
    );  

}

const styles = StyleSheet.create({
    loginRoot: {
        flex: 1,
    },
    loginImage: {
        width: 395,
    },
    loginBtn: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#E51C44',
        padding: 15,
        borderRadius: 5,
        marginTop: 100,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
    loginContainer: {
        flex: 1,
        gap: 12,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#0e1645',
    },
    loginSubTitle: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Rajdhani_Bold',
    },
    textView: {
        gap: 12,
        padding: 5,
        position: 'absolute',
        marginTop: 280
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -100,
        height: '300%',
    },
    loginImageBack: {
        width: 410,
        position: 'absolute',
        marginTop: 50
    },
    loginSubText: {
        color: 'white',
        textAlign: 'center',
    },
    discord: {
        
    },
    divisor: {
        backgroundColor: '#0e1645',
        width: 1,
        height: '100%',
    },
})