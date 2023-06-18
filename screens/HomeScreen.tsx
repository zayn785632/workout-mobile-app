
import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";



export default function HomeScreen({navigation}: NativeStackHeaderProps) {

    useEffect(() =>{
        console.log("Rendering Home Screen");
    }, [])
    
    return (
        <View>
            <Text>I am home screen</Text>
            <Button title="Go to Planner"
            onPress={() => navigation.navigate("Planner")}
            />
        </View>
    )
}