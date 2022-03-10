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
    flex: 8,
  },
  CheckBox: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  field: {
    marginVertical: 8,
  },
  labelForm: {
    fontSize: 17,
    marginBottom: 5,
  },
  inputForm: {borderColor: colors.GRAY, borderWidth: 1, height: 50},
  titleForm: {
    color: colors.PRIMARY_COLOR,
    fontSize: 25,
    marginVertical: 20,
    fontFamily: 'Barlow-SemiBold',
  },
  submit: {
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
    fontFamily: 'Barlow-SemiBold',
  },
});
