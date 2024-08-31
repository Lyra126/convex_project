import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from "axios"; 

const RecordWaste = () => {
    const [wasteAmount, setWasteAmount] = useState('');
    const [email, setEmail] = useState('');

    const getUserData = async (key) => {
        const result = await SecureStore.getItemAsync(key);
        if (result) {
            setEmail(result);
            return result;
        } else {
            console.log('No value stored under that key.');
            return null;
        }
    };

    const handleRecordWaste = () => {
        const recordWaste = async () => {
            console.log("record: ", wasteAmount);
            const userEmail = await getUserData("email");
            if(userEmail){
                console.log("test");
                try {
                    console.log("Sending request with:", { userEmail, wasteAmount });
                    await axios.get(`http://192.168.1.159:8080/users/addWaste`, {
                        params: {
                            email: userEmail,
                            wasteAmount: wasteAmount
                        }
                    });

                    await axios.get(`http://192.168.1.159:8080/users/updatePoints`, {
                        params: {
                            email: userEmail,
                            points: wasteAmount
                        }
                    });
                } catch (error) {
                    console.error("Error recording waste:", error);
                }
            }
        };
        recordWaste();
    };

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headerText}>Record Waste Composted</Text>
            <TextInput
                placeholder="Enter waste amount in pounds"
                value={wasteAmount}
                onChangeText={text => setWasteAmount(text)}
                style={styles.input}
                keyboardType="numeric"
                returnKeyType="done"
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleRecordWaste}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#5f7046',
        borderRadius: 20,
        margin: 60,
        marginBottom:50,
        width: '90%',
        alignSelf: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#EE856F',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default RecordWaste;
