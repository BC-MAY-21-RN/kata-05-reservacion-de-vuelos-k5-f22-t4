import {Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../utils/colors';
import CheckBox from './CheckBox';
import signUpStyles from '../utils/styles/signUpStyles';
import TermsAndConditions from './TermsAndConditions';

const SignUpForm = () => {
  return (
    <View style={signUpStyles.form}>
      <View style={signUpStyles.field}>
        <Text style={signUpStyles.labelForm}>First Name</Text>
        <TextInput style={signUpStyles.inputForm} />
      </View>
      <View style={signUpStyles.field}>
        <Text style={signUpStyles.labelForm}>Email*</Text>
        <TextInput style={signUpStyles.inputForm} />
      </View>
      <View style={signUpStyles.field}>
        <Text style={signUpStyles.labelForm}>Password*</Text>
        <TextInput style={signUpStyles.inputForm} secureTextEntry={true} />
        <Text style={{fontSize: 14}}>
          Use 8 or more characters with a mix letters, numbers and symbols.
        </Text>
      </View>
      <TermsAndConditions />
    </View>
  );
};

export default SignUpForm;
