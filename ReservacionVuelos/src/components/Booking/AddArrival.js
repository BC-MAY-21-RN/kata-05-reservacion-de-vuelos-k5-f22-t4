import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputText from './InputText';
import Button from './Button';
import IconNavigation from './IconNavigation';
import styles from '../../utils/styles/stylesBooking';
import FlightDeapture from '../Flights/FlightDeapture';
import useAuth from '../../hooks/useAuth';

export default function AddArrival({route, navigation}) {
  const {data} = route.params;
  const [arrival, setArrival] = useState();
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconNavigation navigation={navigation} />,
    });
  }, [navigation, route.params]);

  return (
    <View style={styles.containerArrival}>
      <View style={styles.locationArrival}>
        <FlightDeapture flight={data} style={styles.flighArrival} />
      </View>
      <View style={styles.borderDeparture}></View>
      <View style={styles.contentArrival}>
        <Text style={styles.textTitle}>Where will you be flying to?</Text>
        <InputText setData={setArrival} location="arrival" setIsDisabled={setIsDisabled} />
        <Button next="AddDate" data={[{...data}, {...arrival}]} isDisabled={isDisabled} />
      </View>
    </View>
  );
}
