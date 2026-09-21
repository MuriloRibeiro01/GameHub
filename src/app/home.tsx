import { ThemedView } from "@/components/themed-view";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
    return (
        <ThemedView style={styles.root}>
            <SafeAreaView style={styles.homeContainer}>

            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#0e1645',
    },
    root: {
        flex: 1,
    }
})