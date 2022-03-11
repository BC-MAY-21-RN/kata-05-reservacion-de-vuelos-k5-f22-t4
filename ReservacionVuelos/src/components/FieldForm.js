import {Text, View, TextInput} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
const FieldForm = ({label, secure}) => {
  return (
    <View style={signUpStyles.field}>
      <Text style={signUpStyles.labelForm}>{label}</Text>
      <TextInput secureTextEntry={secure} style={signUpStyles.inputForm} />
      {secure && (
        <Text style={{fontSize: 14}}>
          Use 8 or more characters with a mix letters, numbers and symbols.
        </Text>
      )}
    </View>
  );
};

export default FieldForm;
