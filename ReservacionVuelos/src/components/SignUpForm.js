import {Text, View} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
import TermsAndConditions from './TermsAndConditions';
import ButtonForm from './ButtonForm';
import FieldForm from './FieldForm';
const SignUpForm = () => {
  return (
    <View style={signUpStyles.form}>
      <FieldForm label="First Name" />
      <FieldForm label="Email*" />
      <FieldForm label="Password*" secure={true} />
      <TermsAndConditions />
      <View style={signUpStyles.buttonContainer}>
        <ButtonForm content="Sign Up" />
        <Text style={{alignSelf: 'center'}}>or</Text>
        <ButtonForm icon="google" content="Sign Up with Google" />
        <Text style={signUpStyles.textLogin}>
          Already have an account? Log In
        </Text>
      </View>
    </View>
  );
};
export default SignUpForm;
