import {Text, View} from 'react-native';
import React, {useState} from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
import TermsAndConditions from './TermsAndConditions';
import ButtonForm from './ButtonForm';
import FieldForm from './FieldForm';
import {Formik} from 'formik';
import SignupSchema from '../utils/SignUpSchema';
import SubscribeCheckbox from './SubscribeCheckbox';

const SignUpForm = () => {
  return (
    <Formik
      style={signUpStyles.form}
      initialValues={{firstName: '', email: '', password: '', terms: true}}
      validateOnMount={true}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}>
      {({handleSubmit, isValid}) => (
        <>
          <FieldForm label="First Name" name={'firstName'} />
          <FieldForm label="Email*" name={'email'} />
          <FieldForm
            label="Password*"
            secureTextEntry={true}
            name={'password'}
          />
          <TermsAndConditions name={'terms'} />
          <SubscribeCheckbox />
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
        </>
      )}
    </Formik>
  );
};
export default SignUpForm;
