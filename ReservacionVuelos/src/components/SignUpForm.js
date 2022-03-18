import React from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
import TermsAndConditions from './TermsAndConditions';
import FieldForm from './FieldForm';
import {Formik} from 'formik';
import SignupSchema from '../utils/SignUpSchema';
import SubscribeCheckbox from './SubscribeCheckbox';
import SignUpButtons from './SignUpButtons';
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
          <SignUpButtons handleSubmit={handleSubmit} isValid={isValid} />
        </>
      )}
    </Formik>
  );
};

export default SignUpForm;
