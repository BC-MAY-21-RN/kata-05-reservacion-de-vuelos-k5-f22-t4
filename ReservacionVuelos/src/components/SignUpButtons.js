import { Text, View } from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/Styles';
import ButtonForm from './ButtonForm';

const SignUpButtons = ({ handleSubmit, isValid, label }) => {
  const img = require('../assets/img/google.png')
  return (
    <View style={signUpStyles.buttonContainer}>
      <ButtonForm
        content={label}
        onPress={handleSubmit}
        disabled={!isValid}
      />
      <Text style={{ alignSelf: 'center' }}>or</Text>
      <ButtonForm img={img} content={`${label} with Google`} />

      {label == 'Sign Up' ? (<Text style={signUpStyles.textLogin}>
        Already have an account? Log In
      </Text>) : (<Text style={signUpStyles.textLogin}>
        Do you haven't an account? Sign Up
      </Text>)}
    </View>
  );
};

export default SignUpButtons;
