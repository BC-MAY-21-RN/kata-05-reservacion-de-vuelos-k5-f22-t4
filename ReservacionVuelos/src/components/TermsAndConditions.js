import {Text, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import signUpStyles from '../utils/styles/signUpStyles';
import colors from '../utils/colors';

const TermsAndConditions = () => {
  return (
    <View>
      <BouncyCheckbox
        style={signUpStyles.checkbox}
        iconStyle={signUpStyles.iconCheckBox}
        fillColor={colors.PRIMARY_COLOR}
        textComponent={
          <Text>
            I agree to the
            <Text style={signUpStyles.textTerms}>Terms</Text> and
            <Text style={signUpStyles.textTerms}> Privacy Policy</Text>
          </Text>
        }
      />
      <BouncyCheckbox
        style={signUpStyles.checkbox}
        iconStyle={signUpStyles.iconCheckBox}
        fillColor={colors.PRIMARY_COLOR}
        textComponent={<Text>Subscribe for select produtc updates.</Text>}
      />
    </View>
  );
};

export default TermsAndConditions;
