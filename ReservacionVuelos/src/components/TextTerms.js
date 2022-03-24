import {Text} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/Styles';

const TextTerms = () => {
  return (
    <Text>
      I agree to the
      <Text style={signUpStyles.textTerms}>Terms and Privacy Policy</Text>
    </Text>
  );
};

export default TextTerms;
