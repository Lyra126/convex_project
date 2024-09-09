import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Welcome = () => {
    return (
        <View style={styles.container}>
            {/* top green part, with image */}
            <View style={styles.topDiv}>
                <Image></Image>
            </View>

            {/* hello text */}
            <View style={styles.welcomeDiv}>
                <Text style={styles.welcomeText}>Hey! Welcome to</Text>
                <Text style={styles.appText}>Budget Bytes</Text>
            </View>

            {/* description text */}
            <View>
                <Text style={styles.descriptionText}>Meet <Text style={{ fontWeight: '800', color: 'black' }}>Bud</Text>, your new AI kitchen assistant:
                    simplifying your meal planning, shopping, and budgeting.</Text>
            </View>

            {/* button for navigation to create account */}
            <View style={styles.outerCircle}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'grey'}}>→</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f0e8',
    },
    topDiv: {
        backgroundColor: '#87C97E',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 400, // Adjust height as needed
    },
    welcomeDiv: {
        marginTop: 330,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: '600',
    },
    appText: {
        marginTop: -8,
        fontSize: 36,
        fontWeight: '800',
        paddingBottom: 20,
    },
    descriptionText: {
        fontSize: 15,
        color: '#2d2d2d',
        fontWeight: '450',
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
    },
    outerCircle: {
        marginTop: 40,
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 500,
        padding: 10,
        color: '#525252'
    },
    button: {
        borderWidth: 5,
        borderColor: 'grey',
        borderRadius: 500,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Welcome;