import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from '../utils/colors';
import signUpStyles from '../utils/styles/signUpStyles';

const CheckBox = ({textContent}) => {
  return (
    <View style={signUpStyles.CheckBox}>
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
      {textContent}
    </View>
  );
};

export default CheckBox;
