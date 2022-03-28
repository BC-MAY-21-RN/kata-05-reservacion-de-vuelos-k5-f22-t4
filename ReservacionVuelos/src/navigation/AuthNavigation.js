import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenLogIn from '../screens/LogIn'
import ScreenSignUp from '../screens/SignUp'

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={ScreenLogIn} options={{ title: "", headerTransparent: true, headerShown: false }} />
            <Stack.Screen name='Signup' component={ScreenSignUp} options={{ title: "", headerTransparent: true, headerShown: false }} />
        </Stack.Navigator>
    )
}