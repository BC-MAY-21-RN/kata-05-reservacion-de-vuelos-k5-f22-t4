import React from 'react'
import { Formik } from 'formik';
import FieldForm from './FieldForm';
import LoginSchema from '../utils/LoginSchema';
import SignUpButtons from './SignUpButtons';
function LogInForm() {
    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validateOnMount={true}
                validationSchema={LoginSchema}
                onSubmit={values => loginUser(values)}>
                {({ handleSubmit, isValid }) => (
                    <>
                        <FieldForm label="Email" name={'email'} />
                        <FieldForm label="Password" name={'password'} secureTextEntry={true} />
                        <SignUpButtons handleSubmit={handleSubmit} isValid={isValid} label="Log In" />
                    </>)}
            </Formik>
        </>
    )
}
export default LogInForm;