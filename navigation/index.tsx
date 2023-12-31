
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { ColorSchemeName } from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';




export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName}){

    return(
        <NavigationContainer 
            theme={colorScheme === "light" ? DefaultTheme : DarkTheme}
            
            >
            <RootNavigator/>
        </NavigationContainer>

    )
}

const Stack = createNativeStackNavigator();
function RootNavigator(){

   return(
    <Stack.Navigator>

    <Stack.Screen
     name="Root"
     component={BottomTabNavigator} 
     options={{headerShown: false}}
    />

    <Stack.Screen
     name="WorkoutDetail"
     component={WorkoutDetailScreen}
     options={{title: "Workout Info"}}
    />
</Stack.Navigator>
   )
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return(
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                    tabBarIcon: ({color, size}) => 
                    <Ionicons 
                    name="ios-home" 
                    size={size} 
                    color={color} />
                }}
            />
             <BottomTab.Screen
            name="Planner"
            component={PlannerScreen}
            options={{
                unmountOnBlur: true,
                tabBarIcon: ({color, size}) => 
                <FontAwesome5 
                name="clipboard-list"
                size={size} 
                color={color} />
            }}
            
            />
        </BottomTab.Navigator>
    )
}