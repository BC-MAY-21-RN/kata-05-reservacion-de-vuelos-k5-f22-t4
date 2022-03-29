import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenFlights from '../screens/Flights'
import ScreenBooking from '../screens/Booking'

const Stack = createNativeStackNavigator();

export default function FlightsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='FlightsHome' component={ScreenFlights} options={{ title: "", headerTransparent: true }} />
            <Stack.Screen name='Booking' component={ScreenBooking} options={{ title: "", headerTransparent: true }} />
        </Stack.Navigator>
    )
}