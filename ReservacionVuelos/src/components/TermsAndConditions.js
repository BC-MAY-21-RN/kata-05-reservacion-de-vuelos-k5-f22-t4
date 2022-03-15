import {Text, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import signUpStyles from '../utils/styles/signUpStyles';
import colors from '../utils/colors';
import {useField} from 'formik';

const TermsAndConditions = ({
  checkboxState,
  setCheckboxState,
  setFieldValue,
  setFieldTouched,
  errors,
  touched,
}) => {
  return (
    <View>
      <BouncyCheckbox
        style={signUpStyles.checkbox}
        iconStyle={signUpStyles.iconCheckBox}
        fillColor={colors.PRIMARY_COLOR}
        isChecked={checkboxState}
        onPress={() => {
          setFieldTouched('terms', true);
          setCheckboxState(!checkboxState);
          setFieldValue('terms', checkboxState);
        }}
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
      {errors.terms && touched.terms && (
        <Text style={{color: 'red'}}>{errors.terms}</Text>
      )}
    </View>
  );
};

export default TermsAndConditions;
