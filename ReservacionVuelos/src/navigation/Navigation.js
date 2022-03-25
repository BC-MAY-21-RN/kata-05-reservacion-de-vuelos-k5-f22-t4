import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Flights from "../screens/Flights";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Account"
                component={LogIn}
                options= {{
                    tabBarLabel: "Mi Cuenta",
                    tabBarIcon: ({ color, size }) => (<Icon name='user' size={30} color={color} />)
                }}
            />
            <Tab.Screen 
                name="Flights"
                component={Flights}
                options= {{
                    tabBarLabel: "Vuelos",
                    tabBarIcon: ({ color, size }) => (<Icon name='plane' size={30} color={color} />)
                }}
            />
        </Tab.Navigator>
    )
}