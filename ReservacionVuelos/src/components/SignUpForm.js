import React, { useState } from 'react';
import { Alert } from 'react-native';
import signUpStyles from '../utils/styles/signUpStyles';
import TermsAndConditions from './TermsAndConditions';
import { Formik } from 'formik';
import SignupSchema from '../utils/SignUpSchema';
import SubscribeCheckbox from './SubscribeCheckbox';
import SignUpButtons from './SignUpButtons';
import auth from '@react-native-firebase/auth';
import ModalResponse from './ModalResponse';
import FormContain from './FormContain';

const registerUser = (values, setModalVisible) => {
  auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(() => {
      console.log('User account created & signed in!');
      setModalVisible(true);
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
  return (
    <>
      <Formik
        style={signUpStyles.form}
        initialValues={{ firstName: '', email: '', password: '', terms: true }}
        validateOnMount={true}
        validationSchema={SignupSchema}
        onSubmit={values => registerUser(values, setModalVisible)}>
        {({ handleSubmit, isValid }) => (
          <>
            <FormContain />
            <TermsAndConditions name={'terms'} />
            <SubscribeCheckbox />
            <SignUpButtons handleSubmit={handleSubmit} isValid={isValid} label="Sign Up" />
          </>
        )}
      </Formik>
      <ModalResponse modalVisible={modalVisible} />
    </>
  );
};

export default SignUpForm;
