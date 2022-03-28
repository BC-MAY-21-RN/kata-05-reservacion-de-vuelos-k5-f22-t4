import React from 'react';
import FieldForm from './FieldForm';

export default function FormContain() {
  return (
    <>
      <FieldForm label="First Name*" name={'firstName'} />
      <FieldForm label="Email*" name={'email'} />
      <FieldForm
        label="Password*"
        securePass={true}
        name={'password'}
        screen="signup"
      />
    </>
  );
}
