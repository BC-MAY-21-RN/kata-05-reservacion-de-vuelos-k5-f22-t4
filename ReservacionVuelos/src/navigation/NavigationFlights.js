import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenFlights from '../screens/Flights'

const Stack = createNativeStackNavigator();

export default function FlightsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Flights' component={ScreenFlights} options={{ title: "", headerTransparent: true }} />
        </Stack.Navigator>
    )
}