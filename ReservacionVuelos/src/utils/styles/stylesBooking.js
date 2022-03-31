'use strict';
import {StyleSheet} from 'react-native';
import colors from '../colors';

module.exports = StyleSheet.create({
  containerFeacture: {
    marginTop: 200,
    alignItems: 'center',
    marginBottom: 180,
  },
  containerArrival: {
    marginTop: 200,
    alignItems: 'center',
    marginBottom: 180,
  },
  btnBooking: {
    width: '80%',
  },
  button: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#5499C7',
    marginTop: 100,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Barlow-SemiBold',
    paddingEnd: 20,
  },
  iconButton: {
    marginTop: 3,
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ABB2B9',
    width: '100%',
    fontSize: 16,
  },
  inputContaint: {
    width: '90%',
  },
  textTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000',
    padding: 15,
  },
});
