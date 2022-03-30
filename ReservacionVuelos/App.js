import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import {AuthProvider} from './src/context/AuthContext'

import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  )
};

export default App;
