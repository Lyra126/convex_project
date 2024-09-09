import React, { useRef, useEffect, useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Button, SafeAreaView, Modal, Alert, ImageBackground, TextInput, Pressable} from "react-native";
import { GestureHandlerRootView, Gesture, GestureDetector,} from "react-native-gesture-handler";
import globalStyles from './styles/globalStyles.js';
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';


const SignUp = ({ onLogin, ...props }) => {
    // const navigation = useNavigation();
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    //
    // const handleSubmit = () => {
    //     if (!name || !email || !password ) {
    //         setErrorMessage("All fields are required.");
    //         return;
    //     }
    //
    //     setErrorMessage("");
    //     console.log("creating user...");
    //     axios.get(`http://192.168.1.159:8080/users/get?email=${email}`)
    //         .then((response) => {
    //             const userData = response.data;
    //             if (userData) {
    //                 console.log("user exists");
    //                 // User exists, proceed with login
    //                 onLogin(email);
    //             } else {
    //                 console.log("user doesn't exist");
    //                 // User not found, create a new user
    //                 axios.post('http://192.168.1.159:8080/users/createUser', {
    //                     email_address: email,
    //                     name: name,
    //                     username: name,
    //                     password: password
    //                 })
    //                 .then((response) => {
    //                     console.log('User created successfully:', response.data);
    //                     // Proceed with login after creating the user
    //                     onLogin(email);
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error creating user:', error);
    //                     setErrorMessage('Error creating user. Please try again.');
    //                 });
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("user doesn't exist");
    //                 // User not found, create a new user
    //                 axios.post('http://192.168.1.159:8080/users/createUser', {
    //                     email_address: email,
    //                     name: username,
    //                     username: username,
    //                     password: password
    //                 })
    //                 .then((response) => {
    //                     console.log('User created successfully:', response.data);
    //                     // Proceed with login after creating the user
    //                     onLogin(email);
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error creating user:', error);
    //                     setErrorMessage('Error creating user. Please try again.');
    //                 });
    //         });
    // };

    return (
        <SafeAreaView  style={[globalStyles.AndroidSafeArea, styles.container]}>
            {/* sign up text */}
            <View>
                <Text style={styles.signUpTextHeader}> Ready to Meet Bud?</Text>
                <Text style={styles.signUpText}>Just a couple of steps away and you're ready to effortlessly manage meals and groceries!</Text>
            </View>

            {/* form div */}
            <View>
                {/* all the inputs */}
                <View style={styles.inputView}>
                    <View style={styles.inputSection}>
                        <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 18, marginBottom: 5}}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='#888888'
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 18, marginBottom: 5}}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='#888888'
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 18, marginBottom: 5}}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='#888888'
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.inputSection}>
                        <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 18, marginBottom: 5}}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='#888888'
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
            </View>
            </View>

            {/* create account button*/}
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>

            {/* buttons */}
            <Text style={{textAlign:'center', color: 'grey', paddingTop: 30, marginBottom: 20}}>Or sign up through </Text>
            <View style={styles.mediaIcons}>
                <View style={[styles.icons, {backgroundColor: '#1876f0'}]}>
                    <TouchableOpacity>
                        <Ionicons name="logo-facebook" size={42} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.icons, {backgroundColor: '#8f8f8f'}]}>
                    <TouchableOpacity>
                        <AntDesign name="apple1" size={35} color="white" />
                    </TouchableOpacity>
                    </View>
                <View style={[styles.icons, {backgroundColor: '#3f3f3f'}]}>
                    <TouchableOpacity>
                        <Image
                        source={{uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000'}}
                        style={{width: 40, height: 40}}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* already have acc login text */}
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20}}>
                <Text style={{fontSize: 16, color: '#5B5752', marginTop: -20}}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 16,fontWeight: '700', color: 'green',marginLeft: 3, marginTop: -20}}> Login</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>

        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F0E8FF',
        padding: 40,
    },
    signUpTextHeader: {
        fontSize: 26,
        fontWeight: '800',
        marginBottom: 3,
        paddingLeft:20,
        marginTop: 50,
    },
    signUpText:{
        fontSize: 14,
        color: '#5B5752',
        fontWeight: '450',
        paddingLeft:25,
    },
    inputView : {
        marginTop: 30,
        gap : 18,
        width : "100%",
        marginBottom: 7
    },
    inputSection: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    input: {
        height : 45,
        width : "100%",
        paddingHorizontal : 20,
        backgroundColor: "#dfdfdf",
        borderRadius: 20
    },
    button: {
        backgroundColor : "#74be69",
        height : 45,
        width : "90%",
        marginTop: 50,
        marginBottom: 20,
        borderRadius : 20,
        alignItems : "center",
        justifyContent : "center",
    },
    buttonText:{
        color : '#faf9f3',
        fontSize : 16,
        fontWeight: "bold"
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

});

export default SignUp;