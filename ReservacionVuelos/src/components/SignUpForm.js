import {Text, View} from 'react-native';
import React, {useState} from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
import TermsAndConditions from './TermsAndConditions';
import ButtonForm from './ButtonForm';
import FieldForm from './FieldForm';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, '*Too Short!')
    .max(50, '*Too Long!')
    .required('*Required'),
  email: Yup.string().email('Invalid email').required('*Required'),
  password: Yup.string()
    .required('*Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      '*Follow password recommendations ',
    ),
  terms: Yup.boolean().oneOf(
    [false],
    '*You must agree to terms and conditions',
  ),
});

const SignUpForm = () => {
  const [checkboxState, setCheckboxState] = useState(false);
  return (
    <Formik
      style={signUpStyles.form}
      initialValues={{firstName: '', email: '', password: '', terms: false}}
      validateOnMount={true}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isValid,
        errors,
        setFieldValue,
        setFieldTouched,
      }) => (
        <>
          <FieldForm label="First Name" name={'firstName'} />
          <FieldForm label="Email*" name={'email'} />
          <FieldForm
            label="Password*"
            secureTextEntry={true}
            name={'password'}
          />
          <TermsAndConditions
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            setCheckboxState={setCheckboxState}
            errors={errors}
            touched={touched}
          />
          <View style={signUpStyles.buttonContainer}>
            <ButtonForm content="Sign Up" />
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
