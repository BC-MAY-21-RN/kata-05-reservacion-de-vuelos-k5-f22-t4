import {Text, View, TextInput, Linking} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../utils/colors';

import signUpStyles from '../utils/styles/signUpStyles';
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
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <BouncyCheckbox
            iconStyle={{
              borderRadius: 0,
              borderColor: 'black',
              borderWidth: 0.5,
              height: 20,
              width: 20,
            }}
            fillColor={colors.PRIMARY_COLOR}
          />
          <Text style={{}}>
            I agree to the
            <Text style={{textDecorationLine: 'underline'}}>Terms</Text> and
            <Text style={{textDecorationLine: 'underline'}}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BouncyCheckbox
            iconStyle={{
              borderRadius: 0,
              borderColor: 'black',
              borderWidth: 0.5,
              height: 20,
              width: 20,
            }}
            fillColor={colors.PRIMARY_COLOR}
          />
          <Text>Subscribe for select produtc updates.</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpForm;
