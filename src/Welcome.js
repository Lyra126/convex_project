import React, { useRef, useEffect, useState } from "react";
import {
    View,
    Animated,
    Image,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import globalStyles from './styles/globalStyles.js';

const Welcome = () => {
    const navigation = useNavigation();
    const progress = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1.2)).current;
    // const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
                    Animated.spring(progress, { toValue: 2, useNativeDriver: true }),
                ]),
                Animated.sequence([
                    Animated.spring(scale, { toValue: 1.5, useNativeDriver: true }),
                    Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
                ]),
            ]),
            { iterations: 1 }
        ).start(() => {
            navigation.reset({
                index: 0, // resets the stack so that user cannot go back to this welcome screen
                routes: [{ name: 'PromptLoginSignUp' }],
            });
        });
    }, []);

    return (
        <SafeAreaView style={[globalStyles.AndroidSafeArea, styles.container]}>
            <Animated.View
                style={[
                    {
                        transform: [
                            { scale },
                            {
                                rotate: progress.interpolate({
                                    inputRange: [0.5, 1],
                                    outputRange: [`${Math.PI}rad`, `${2 * Math.PI}rad`],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Animated.Image
                    style={{...styles.image }}
                    source={require('./assets/earthDay.gif')}
                />
            </Animated.View>
        </SafeAreaView>
    );
}

const SIZE = 100.0;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 130,
        height: 130,
    },
});

export default Welcome;