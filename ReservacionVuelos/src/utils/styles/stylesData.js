'use strict';
import {StyleSheet} from 'react-native';
import colors from '../colors';

module.exports = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.mor,
  },
  titleBi: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.water,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.water,
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 90,
    color: colors.water,
  },
  itemText: {
    color: colors.mor,
  },
  icon: {
    marginLeft: 20,
    marginRight: 20,
  },
  btnLogout: {
    padding: 30,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#5499C7',
    marginTop: 30,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Barlow-SemiBold',
    paddingStart: 20,
  },
});
