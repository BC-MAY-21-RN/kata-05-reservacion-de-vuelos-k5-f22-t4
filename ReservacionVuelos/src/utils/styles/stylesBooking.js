'use strict';
import {StyleSheet} from 'react-native';
import colors from '../colors';

module.exports = StyleSheet.create({
  containerFeacture: {
    marginTop: 240,
    alignItems: 'center',
  },
  containerArrival: {
    marginTop: 20,
    marginBottom: 120,
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
    marginTop: 90,
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    padding: 15,
  },
  imgCity: {
    width: 22,
    height: 22,
    marginEnd: 6,
    marginTop: 2,
  },
  listCityItem: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    backgroundColor: colors.GRAY,
    borderRadius: 4,
  },
  textItem: {
    color: colors.PRIMARY_COLOR_DARK,
    fontSize: 16,
  },
  flightsAddDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
    marginHorizontal: '5%',
    width: '90%',
  },
  locationArrival: {
    marginTop: 40,
    marginStart: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  flighArrival: {
    margin: 10,
    flexDirection: 'row',
  },
  borderDeparture: {
    borderBottomWidth: 0.5,
    width: '40%',
    marginStart: 30,
  },
  borderDate: {
    borderBottomWidth: 0.5,
    width: '90%',
    marginStart: '5%',
  },
  listCities: {
    marginBottom: -200,
  },
  contentArrival: {
    marginTop: 30,
    alignItems: 'center',
  },
  inputsDate: {
    alignItems: 'center',
  },
  addDateDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    paddingVertical: 10,
    width: '90%',
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});
