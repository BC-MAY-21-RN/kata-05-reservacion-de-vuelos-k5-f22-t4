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
    alignItems: 'center',
    marginBottom: 120,
  },
  btnBooking: {
    width: '80%',
    marginTop: 150,
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
    fontSize: 38,
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
  locationArrival: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
    margin: 20,
    width: '90%',
  },
  locationFinal: {
    justifyContent: 'space-around',
  },
  borderDeparture: {
    width: '80%',
    borderBottomWidth: 0.5,
  },
  listCities: {
    marginBottom: -200,
  },
});
