import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Start = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Budget Bytes</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F0E8FF',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Start;