import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FlightsNavigation from './NavigationFlights';
import AuthNavigation from './AuthNavigation';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlane, faUser} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Login">
      <Tab.Screen
        name="Account"
        component={AuthNavigation}
        options={{
          tabBarLabel: 'My account',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Flights"
        component={FlightsNavigation}
        options={{
          tabBarLabel: 'My Flights',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faPlane} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
