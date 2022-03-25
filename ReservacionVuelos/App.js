import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
};

export default App;
