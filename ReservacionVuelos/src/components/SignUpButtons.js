import { Text, View } from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/Styles';
import ButtonForm from './ButtonForm';
import TextLink from './TextLink';

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

      {label == 'Sign Up' ? (<TextLink contentText={"Already have an account?"} linkText={'Log In'} routeName={'Login'} />) : (
        <TextLink contentText={"Do you haven't an account?"} linkText={'Sign Up'} routeName={'Signup'} />
      )
      }


    </View >
  );
};

export default SignUpButtons;
