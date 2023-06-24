

import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

import WorkoutItem from "../components/WorkoutItem";
import { useWorkouts } from "../hooks/useWorkouts";
import { ThemeText } from "../components/Text";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
   const workouts = useWorkouts();

    return (
        
            <View style={styles.container}>
            <ThemeText style={styles.header}>New Workouts</ThemeText>
           
            <FlatList
              data={workouts}
              renderItem={({item}) => {
                return (
                    <Pressable
                    onPress={() => 
                        navigation.navigate("WorkoutDetail", {slug: item.slug})}
                    >
                    <WorkoutItem 
                    item={item}
                    />
                    </Pressable>
                )
              }}
              keyExtractor={item => item.slug}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
        
    }
})