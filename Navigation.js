import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CenterHome from "./src/centerHome";
import RecordWaste from "./src/RecordWaste.js";
import GroceryList from "./src/GroceryList.js";
import Home from "./src/Home";
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from "react";


const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={CenterHome}/>
            <Tab.Screen name="Tree" component={Home}/>
            <Tab.Screen name="Record Waste" component={RecordWaste}/>
            <Tab.Screen name="GroceryList" component={GroceryList} />
        </Tab.Navigator>
    )
}
export default function Navigation(){
    return(
        <TabGroup />
    )
}