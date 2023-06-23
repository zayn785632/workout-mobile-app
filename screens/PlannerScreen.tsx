
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import WorkoutForm from "../components/WorkoutForm";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {
    
    return (
        <View style={styles.container}>
            <WorkoutForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})

