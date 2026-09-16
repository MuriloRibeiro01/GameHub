import { ThemedView } from "@/components/themed-view";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginPage() {
    
    function entrar() {
        const router = useRouter();

        router.replace('/agendar');
    }

    return (
        <ThemedView>
            <SafeAreaView style={styles.loginContainer}>
                <Image style={styles.loginImage} source={require('../../public/GameHubImages/Image.png')}/>
                <TouchableOpacity onPress={entrar} style={styles.loginBtn}>
                    <Text style={styles.loginText}>Entrar com Discord</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ThemedView>
    );  

}

const styles = StyleSheet.create({
    loginImage: {
        
    },
    loginBtn: {
        backgroundColor: 'red',
        padding: 5,
    },
    loginText: {

    },
    loginContainer: {

    },
})