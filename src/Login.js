import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, SafeAreaView, ImageBackground,TextInput, Pressable, Alert} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from "@react-navigation/native";
import globalStyles from "./styles/globalStyles";
import Fontisto from "react-native-vector-icons/Fontisto";
import axios from 'axios'; 
import Navigation from "../Navigation"

const Login = ({ onLogin, ...props }) => {
    const navigation = useNavigation();
    const [email,setEmail]=  useState("");
    const [password,setPassword]=  useState("");
    const [error, setError] = useState("");
    
    const handleSignIn = () =>{
        setError("");
        axios.get(`http://192.168.1.159:8080/users/get?email=${email}&password=${password}`)
        .then((response) => {
            const userData = response.data;
            if (userData) {
                // Login successful, will navigate user to the home page
                onLogin(email);
            }  else if (data.status === "fail") {
                // Login failed
                setError(data.message || "Incorrect email or password. Please try again.");
            } else {
                // Handle unexpected status
                setError("Unexpected response. Please try again.");
            }
        })
        .catch((error) => {
            // Error handling
            if (error.response) {
                if (error.response.status === 404) {
                    // Handle 404 not found
                    setError("User not found. Please check your email and password.");
                } else {
                    // Handle other errors
                    setError(`Error: ${error.response.data.message || "An issue occurred. Please try again later."}`);
                }
            } else {
                // Handle network or other errors
                console.error("Error signing in:", error);
                setError("There was an issue signing in. Please try again later.");
            }
        });

      }

    return (
        <SafeAreaView  style={[globalStyles.AndroidSafeArea, styles.container]}>
            <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('PromptLoginSignUp')}}>
                <Text style={{fontSize: 37}}> ← </Text>
            </TouchableOpacity>
            <View style = {styles.loginInformation}>
            <Text style={styles.welcomeBack}>Welcome Back! 👋  </Text>
            <Text style = {styles.welcomeText}>We're so glad to see you again! </Text>
                <View style={styles.inputView}>
                    <View style={styles.inputSection}>
                        <FontAwesome name="envelope" size={20} color="#000" />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='#888888'
                            value={email}
                            onChangeText={setEmail}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Fontisto name="locked" size={22} color="#000" />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='#888888'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                </View>
                {error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : null}
             <View style={styles.forgotPasswordView}>
                    {/* change this to direct user to a forgot password page*/}
                    <Pressable onPress={() => Alert.alert("Forget Password!")}>
                        <Text style={styles.forgetText}>Forgot your password?</Text>
                    </Pressable>
             </View>

            <View style={styles.buttonView}>
                {/* change this to direct user to home page*/}
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.optionsText}>
                    <View style={{backgroundColor: 'lightgrey', height: 1, flex: 1, alignSelf: 'center'}} />
                    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 15, color: '#A9A9A9'}}>OR</Text>
                    <View style={{backgroundColor: 'lightgrey', height: 1, flex: 1, alignSelf: 'center'}} />
                </View>
            </View>

            <View style={styles.mediaIcons}>
                <View style={[styles.icons, {backgroundColor: '#e5e5e5'}]}>
                    <Image
                        source={{uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000'}}
                        style={{width: 40, height: 40}}
                    />
                </View>
                <View style={[styles.icons, {backgroundColor: '#e5e5e5'}]}>
                    <AntDesign name="apple1" size={35} color="black" />
                </View>
            </View>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't Have Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[styles.signup,{marginLeft: 3}]}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6fbb58',
        padding: 40,
    },
    backButton: {
        marginLeft: 20,
    },
    loginInformation: {
       backgroundColor: 'white',
        height: '100%',
        borderRadius: 30,
        paddingTop: 50,
        marginTop: 70,
        paddingHorizontal: 26
    },
    welcomeBack: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    welcomeText: {
        fontSize: 16,
        color: 'gray',
    },
    image : {
        height : 160,
        width : 170
    },
    inputView : {
        marginTop: 50,
        gap : 18,
        width : "100%",
        marginBottom: 7
    },
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    input: {
        height : 50,
        width : "80%",
        paddingHorizontal : 20,
        backgroundColor: "#eaeaea",
        borderRadius: 20
    },
    forgotPasswordView : {
        marginTop: 10,
        marginBottom : 40,
        marginLeft: 10
    },
    forgetText : {
        fontSize : 13,
        color : "#7ead73"
    },
    button : {
        backgroundColor : "#62af49",
        height : 45,
        width : "100%",
        borderRadius : 20,
        alignItems : "center",
        justifyContent : "center",
    },
    buttonText : {
        color : "white"  ,
        fontSize: 18,
        fontWeight : "bold"
    },
    buttonView :{
        width :"100%",
    },
    optionsText : {
        textAlign : "center",
        color : "gray",
        fontSize : 13,
        marginVertical: 30,
        flexDirection: 'row'
    },
    mediaIcons : {
        flexDirection : "row",
        gap : 22,
        alignItems: "center",
        justifyContent : "center",
        marginBottom : 23,
    },
    icons : {
        width : 55,
        height: 55,
        borderRadius : 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView : {
        flexDirection : "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    footerText : {
        textAlign: "center",
        color : "gray",
    },
    signup : {
        color : "#65b439",
        textAlign: "center",
        fontWeight : "bold",
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default Login;