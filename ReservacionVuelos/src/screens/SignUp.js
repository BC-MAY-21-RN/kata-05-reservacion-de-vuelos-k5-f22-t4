import {Text, View} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/Styles';
import SignUpForm from '../components/SignUpForm';
import UserData from '../components/Account/UserData';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
  const {auth} = useAuth()
  return (
    auth ? <UserData /> :  <SignUpForm style={signUpStyles.screen} />
  );
};

export default SignUp;
