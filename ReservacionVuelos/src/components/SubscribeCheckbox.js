import {Text} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../utils/colors';
import signUpStyles from '../utils/styles/signUpStyles';

const SubscribeCheckbox = () => {
  return (
    <>
      <BouncyCheckbox
        style={signUpStyles.checkbox}
        iconStyle={signUpStyles.iconCheckBox}
        fillColor={colors.PRIMARY_COLOR}
        textComponent={<Text>Subscribe for select produtc updates.</Text>}
      />
    </>
  );
};

export default SubscribeCheckbox;
