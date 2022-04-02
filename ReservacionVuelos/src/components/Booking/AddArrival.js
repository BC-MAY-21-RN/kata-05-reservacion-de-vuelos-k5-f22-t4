import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputText from './InputText';
import Button from './Button';
import IconNavigation from './IconNavigation';
import styles from '../../utils/styles/stylesBooking';
import FlightDeapture from '../Flights/FlightDeapture';
const jsonData = [
  {
    departure: {
      abrev: 'med',
      city: 'medellin',
      country: 'colombia',
      img: 'https://cdn-icons-png.flaticon.com/512/555/555617.png',
    },
  },
];
export default function AddArrival({route, navigation}) {
  const {data} = route.params;
  const [arrival, setArrival] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconNavigation navigation={navigation} />,
    });
  }, [navigation, route.params]);

  return (
    <>
      <View style={styles.locationArrival}>
        <FlightDeapture flight={data} style={styles.flighArrival} />
      </View>
      <View style={[styles.borderDeparture, {alignSelf: 'center'}]}></View>
      <View style={styles.containerArrival}>
        <Text style={styles.textTitle}>Where will you be flying to?</Text>
        <InputText setData={setArrival} />
        <Button next="AddDate" data={[{...data}, {...arrival}]} />
      </View>
    </>
  );
}
