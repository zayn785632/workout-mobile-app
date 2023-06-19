
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";



import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";




export default function Navigation(){

    return(
        <NavigationContainer>
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