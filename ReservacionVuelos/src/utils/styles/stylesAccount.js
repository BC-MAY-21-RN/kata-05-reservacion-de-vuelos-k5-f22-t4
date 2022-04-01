'use strict';
import {StyleSheet} from 'react-native';
import colors from '../colors';

module.exports = StyleSheet.create({
  content: {
    marginVertical: 80,
    paddingHorizontal: 25,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#1F618D',
    fontSize: 18,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#5499C7',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Barlow-SemiBold',
    paddingStart: 20,
  },
});
