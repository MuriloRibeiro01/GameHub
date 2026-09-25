import { View, Text, Button, StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Agendamento() {
    return (
        <ThemedView style={styles.root}>
            <SafeAreaView style={styles.safeContainer}>
                
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
    }
});