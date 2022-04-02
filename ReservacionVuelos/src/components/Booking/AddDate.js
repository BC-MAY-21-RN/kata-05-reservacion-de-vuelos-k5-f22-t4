import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../../utils/styles/stylesBooking';
import Button from './Button';
import IconNavigation from './IconNavigation';
import FlightDeapture from '../Flights/FlightDeapture';
//1234qwER$$
export default function AddDate(props) {
  const {
    navigation,
    route: {params},
  } = props;

  const dataFlight = props.route.params.data;
  const origin = dataFlight[0];
  const arrival = dataFlight[1];
  console.log(origin, '\n', arrival);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconNavigation navigation={navigation} />,
    });
  }, [navigation, params]);
  return (
    <View style={styles.containerArrival}>
      <View style={[styles.locationArrival, styles.locationFinal]}>
        <FlightDeapture flight={origin} style={styles.flighArrival} />
        <FlightDeapture
          flight={arrival}
          style={styles.flighArrival}
          type="arrival"
        />
      </View>
      <View style={styles.borderDeparture}></View>
      <Text style={styles.textTitle}>Select date</Text>
      <Button next="AddPassengers" />
    </View>
  );
}
