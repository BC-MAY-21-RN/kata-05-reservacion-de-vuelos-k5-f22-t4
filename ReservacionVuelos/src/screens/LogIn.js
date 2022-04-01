import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogInForm from '../components/LogInForm';
import UserData from '../components/Account/UserData';
import useAuth from '../hooks/useAuth';

const LogIn = () => {
  const {auth} = useAuth()

  return (
      !auth ?  <LogInForm /> :  <UserData />
  );
};

export default LogIn;
