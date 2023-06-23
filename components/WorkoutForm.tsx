import { Text, View, StyleSheet} from "react-native";



export default function WorkoutForm() {


    return (
        <View style={styles.container}>
            <Text>
                Excercise Form
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10
    }
})

