import React from 'react';
import { GlobalProvider } from './src/context/global';
import Start from './src/Start';
import signUp from './src/signUp';
import Welcome from './src/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
    return (
        <GlobalProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="signUp" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="signUp" component={signUp} />
                </Stack.Navigator>
            </NavigationContainer>
        </GlobalProvider>
    );
};

export default App;