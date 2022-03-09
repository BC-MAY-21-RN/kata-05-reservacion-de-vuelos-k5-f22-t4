import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import signUpStyles from '../utils/styles/signUpStyles';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  return (
    <View style={signUpStyles.screen}>
      <View style={{flex: 1, borderWidth: 0.4}}>
        <Text style={signUpStyles.titleForm}>SignUp</Text>
      </View>
      <SignUpForm />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
