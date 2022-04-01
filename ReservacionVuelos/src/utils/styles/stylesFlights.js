'use strict';
import {StyleSheet} from 'react-native';
import colors from '../colors';

module.exports = StyleSheet.create({
  safeView: {
    marginBottom: 70,
  },
  titleScreen: {
    fontSize: 30,
    color: colors.PRIMARY_COLOR,
    margin: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: '45%',
    bottom: 25,
  },
  locationsFlights: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: colors.GRAY,
  },
  detailsFlight: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  imgCountry: {
    width: 25,
    height: 25,
    marginTop: 5,
    marginLeft: 15,
  },
  cardFlight: {
    padding: 5,
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    with: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  departure: {
    width: '27%',
    marginBottom: 10,
  },
  imgArrival: {
    width: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 10,
  },
  imgDeapture: {
    width: '20%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
  },
  abrev: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "#000",
  },
  country: {
    fontSize: 16,
    marginTop: 5,
  },
  details: {
      color: '#000',
      fontSize: 16,
  },
});
