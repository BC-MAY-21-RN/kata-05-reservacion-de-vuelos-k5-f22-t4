import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckBox from './CheckBox';

const TermsAndConditions = () => {
  return (
    <View>
      <CheckBox
        textContent={
          <Text style={{}}>
            I agree to the
            <Text style={{textDecorationLine: 'underline'}}>Terms</Text> and
            <Text style={{textDecorationLine: 'underline'}}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        }
      />

      <CheckBox
        textContent={<Text>Subscribe for select produtc updates.</Text>}
      />
    </View>
  );
};

export default TermsAndConditions;
