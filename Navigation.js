import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MealPrep from "./src/MealPrep";
import GroceryList from "./src/GroceryList.js";
import Home from "./src/Home";
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from "react";


const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="MealPrep" component={MealPrep}/>
            <Tab.Screen name="GroceryList" component={GroceryList} />
        </Tab.Navigator>
    )
}
export default function Navigation(){
    return(
        <TabGroup />
    )
}