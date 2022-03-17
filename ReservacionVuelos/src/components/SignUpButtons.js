import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
import ButtonForm from './ButtonForm';

const SignUpButtons = ({handleSubmit, isValid}) => {
  return (
    <View style={signUpStyles.buttonContainer}>
      <ButtonForm
        content="Sign Up"
        onPress={handleSubmit}
        disabled={!isValid}
      />
      <Text style={{alignSelf: 'center'}}>or</Text>
      <ButtonForm icon="google" content="Sign Up with Google" />
      <Text style={signUpStyles.textLogin}>
        Already have an account? Log In
      </Text>
    </View>
  );
};

export default SignUpButtons;

const styles = StyleSheet.create({});
