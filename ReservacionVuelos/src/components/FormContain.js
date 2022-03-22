import React from 'react';
import FieldForm from './FieldForm';

export default function FormContain() {
  return (
    <>
      <FieldForm label="First Name" name={'firstName'} />
      <FieldForm label="Email*" name={'email'} />
      <FieldForm label="Password*" secureTextEntry={true} name={'password'} />
    </>
  );
}
