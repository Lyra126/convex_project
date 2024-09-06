import React from "react";
import Home from "./src/Home.js";
import Login from "./src/Login.js";
import GroceryList from "./src/GroceryList.js";
import { useNavigation } from '@react-navigation/native';
import { GlobalProvider } from "./src/context/global";
import Navigation from "./Navigation";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
    
    return (
        <GlobalProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="GroceryList" screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="GroceryList" component={GroceryList}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GlobalProvider>
    );
};

export default App;
