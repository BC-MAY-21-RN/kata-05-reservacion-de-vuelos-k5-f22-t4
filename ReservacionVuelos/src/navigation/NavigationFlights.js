import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenFlights from '../screens/Flights'
import ScreenBooking from '../screens/Booking'
import ScreenAddArrival from '../components/Booking/AddArrival'
import ScreenAddDate from '../components/Booking/AddDate'
import ScreenAddPassengers from '../components/Booking/AddPassengers'

const Stack = createNativeStackNavigator();

export default function FlightsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='FlightsHome' component={ScreenFlights} options={{ title: "", headerTransparent: true }} />
            <Stack.Screen name='Booking' component={ScreenBooking} options={{ title: "", headerTransparent: true }} />
            <Stack.Screen name='AddArrival' component={ScreenAddArrival} options={{ title: "", headerTransparent: true }} />
            <Stack.Screen name='AddDate' component={ScreenAddDate} options={{ title: "", headerTransparent: true }} />
            <Stack.Screen name='AddPassengers' component={ScreenAddPassengers} options={{ title: "", headerTransparent: true }} />
        </Stack.Navigator>
    )
}