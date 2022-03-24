import {Text, View} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/Styles';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  return (
    <View style={signUpStyles.screen}>
      <SignUpForm />
    </View>
  );
};

export default SignUp;
