

import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";


export default function HomeScreen({navigation}: NativeStackHeaderProps) {
    
    return (
        
            <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
           
            <FlatList
              data={data as Array<Workout>}
              renderItem={({item}) => {
                return (
                    <Pressable
                    onPress={() => navigation.navigate("WorkoutDetail")}
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