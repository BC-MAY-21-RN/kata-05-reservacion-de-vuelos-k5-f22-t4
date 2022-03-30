import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Formik} from 'formik';
import FieldForm from './FieldForm';
import LoginSchema from '../utils/LoginSchema';
import SignUpButtons from './SignUpButtons';
import Styles from '../utils/styles/Styles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const loginUser = (values, navigation, login) => {
  auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then((user) => {
      login(user.user.email)
      if (user) {
        navigation.navigate('Flights');
      }
    })
    .catch((er) => {
      throw er;
    });
};

const LogInForm = () => {
  const [errorText, setErrorText] = useState("");
  const navigation = useNavigation();
  const {login} = useAuth();
  return (
    <View style={Styles.screen}>
      <Text style={Styles.titleForm}>LogIn</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        validationSchema={LoginSchema}
        onSubmit={values => loginUser(values, navigation, login)}>
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
