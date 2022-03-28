import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Flights from "../screens/Flights";

import FlightsNavigation from "./NavigationFlights";
import AuthNavigation from "./AuthNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen
                name="Account"
                component={AuthNavigation}
                options={{
                    tabBarLabel: "Mi Cuenta",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name='user' size={30} color={color} />)
                }}
            />
            <Tab.Screen
                name="Flights"
                component={FlightsNavigation}
                options={{
                    tabBarLabel: "Vuelos",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Icon name='plane' size={30} color={color} />)
                }}
            />
        </Tab.Navigator>
    )
}