import React, {useState} from 'react';
import {Alert, Text, ScrollView} from 'react-native';
import signUpStyles from '../utils/styles/Styles';
import TermsAndConditions from './TermsAndConditions';
import {Formik} from 'formik';
import SignupSchema from '../utils/SignUpSchema';
import SignUpButtons from './SignUpButtons';
import auth from '@react-native-firebase/auth';
import ModalResponse from './ModalResponse';
import FormContain from './FormContain';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import firestore from '@react-native-firebase/firestore';

const registerUser = (values, setModalVisible, navigation, login) => {
  auth()
    .createUserWithEmailAndPassword(values.email, values.password, values.firstName)
    .then(user => {
      setModalVisible(true);
      firestore()
        .collection('Users')
        .add({
          email: values.email,
          userName: values.email.split('@')[0],
          firstName: values.firstName,
        })
        .then(() => {
          console.log('User added!');
        });
      login(user.user.email);
      setTimeout(function () {
        setModalVisible(false);
        navigation.navigate('Flights');
      }, 2500);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
};

const SignUpForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const {login} = useAuth();

  return (
    <ScrollView style={signUpStyles.screen}>
      <Text style={signUpStyles.titleForm}>SignUp</Text>
      <Formik
        style={signUpStyles.form}
        initialValues={{firstName: '', email: '', password: '', terms: true}}
        validateOnMount={true}
        validationSchema={SignupSchema}
        onSubmit={values =>
          registerUser(values, setModalVisible, navigation, login)
        }>
        {({handleSubmit, isValid}) => (
          <>
            <FormContain />
            <TermsAndConditions name={'terms'} />
            <SignUpButtons
              handleSubmit={handleSubmit}
              isValid={isValid}
              label="Sign Up"
            />
          </>
        )}
      </Formik>
      <ModalResponse modalVisible={modalVisible} />
    </ScrollView>
  );
};

export default SignUpForm;
