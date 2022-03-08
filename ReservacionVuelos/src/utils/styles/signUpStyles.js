'use strict';
import {StyleSheet} from 'react-native';
import colors from '../colors';
module.exports = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  form: {
    flex: 4,
    borderWidth: 0.5,
  },
  field: {
    marginVertical: 12,
  },
  labelForm: {
    fontSize: 17,
    marginBottom: 5,
  },
  inputForm: {borderColor: colors.GRAY, borderWidth: 1, height: 50},
  titleForm: {color: colors.PRIMARY_COLOR, fontSize: 25, marginVertical: 20},
});
