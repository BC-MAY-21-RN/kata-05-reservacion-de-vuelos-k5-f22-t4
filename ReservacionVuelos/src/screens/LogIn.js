import { Text, View } from 'react-native';
import React from 'react';
import Styles from '../utils/styles/signUpStyles';
import LogInForm from '../components/LogInForm';
const LogIn = () => {
    return (
        <View style={Styles.screen}>
            <LogInForm />
        </View>
    );
};

export default LogIn;