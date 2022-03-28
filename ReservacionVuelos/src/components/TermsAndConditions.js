import {Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import signUpStyles from '../utils/styles/Styles';
import colors from '../utils/colors';
import {useField} from 'formik';
import TextTerms from './TextTerms';
import SubscribeCheckbox from './SubscribeCheckbox';
const TermsAndConditions = ({...props}) => {
  const [field, meta, helpers] = useField(props);
  const [checkboxState, setCheckboxState] = useState(true);
  useEffect(() => {
    helpers.setValue(checkboxState);
  }, [checkboxState]);
  return (
    <View>
      <BouncyCheckbox
        style={signUpStyles.checkbox}
        iconStyle={signUpStyles.iconCheckBox}
        fillColor={colors.PRIMARY_COLOR}
        isChecked={checkboxState}
        onPress={() => {
          setCheckboxState(!checkboxState);
          helpers.setTouched(true);
        }}
        textComponent={<TextTerms />}
      />
      {meta.error && meta.touched && (
        <Text style={{color: 'red'}}>{meta.error}</Text>
      )}
      <SubscribeCheckbox />
    </View>
  );
};

export default TermsAndConditions;
