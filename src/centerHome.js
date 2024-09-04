import React, { useRef, useEffect, useState } from "react";
import { ScrollView, View, Animated, Image, Linking,StyleSheet, SafeAreaView, Text, TouchableOpacity,Platform, Modal} from "react-native";
import { useNavigation } from '@react-navigation/native';
import globalStyles from "./styles/globalStyles";
import axios from "axios"; 
import * as SecureStore from 'expo-secure-store';

const CenterHome = ({route}) => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();;
    const [name, setName] = useState("");
   

    const saveUserData = async (key, value) => {
        await SecureStore.setItemAsync(key, value);
    }

    useEffect(() => {
        /*
        if (route.params) {
          const { email } = route.params;
          setEmail(email);
          if (email) {
            saveUserData("email", email);
            axios.get(`http://192.168.1.159:8080/users/getUser?email=${email}`)
                .then((response) => {
                
                    const userData = response.data;
                    if (userData) {                        
                        setPoints(userData.current_points);
                        setName(userData.name);
                        setCompostSaved(userData.compost_made);
                        setSavedLocations(userData.saved_locations);
                        setPoints(userData.current_points);
                        setFruitTree(userData.tree_type);
                    } else {
                        console.error("User not found or incorrect credentials");
                    }
                }) 
                .catch((error) => {
                    // Error handling
                    console.error("Error getting user data:", error);
                });
          }
        }*/
      }, [route.params]);
    


    return (
      <>
      </>
    );
}
export default CenterHome;
