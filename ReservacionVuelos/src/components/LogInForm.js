import React from 'react';
import {Alert, Text, View} from 'react-native';
import {Formik} from 'formik';
import FieldForm from './FieldForm';
import LoginSchema from '../utils/LoginSchema';
import SignUpButtons from './SignUpButtons';
import Styles from '../utils/styles/Styles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const loginUser = (values, navigation) => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(user => {
      setTimeout(function () {
        navigation.navigate('Flights');
      }, 2500);
    })
    .catch(error => {
      Alert.alert('Login Fail', 'Email/Password incorrect!');
      console.log(error);
    });
};

function LogInForm() {
  const navigation = useNavigation();
  return (
    <View style={Styles.screen}>
      <Text style={Styles.titleForm}>LogIn</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        validationSchema={LoginSchema}
        onSubmit={values => loginUser(values, navigation)}>
        {({handleSubmit, isValid}) => (
          <>
            <FieldForm label="Email" name={'email'} />
            <FieldForm label="Password*" name={'password'} securePass={true} />
            <SignUpButtons
              handleSubmit={handleSubmit}
              isValid={isValid}
              label="Log In"
            />
          </>
        )}
      </Formik>
    </View>
  );
}
export default LogInForm;
