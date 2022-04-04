import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../utils/styles/stylesBooking';
import Button from './Button';
import IconNavigation from './IconNavigation';
import FlightDeapture from '../Flights/FlightDeapture';
import FlightArrival from '../Flights/FlightArrival';
import CalendarPicker from 'react-native-calendar-picker';

export default function AddDate(props) {
  const {
    navigation,
    route: {params},
  } = props;

  const dataFlight = props.route.params.data;
  const [dateSelect, setDateSelect] = useState();
  const origin = dataFlight[0];
  const arrival = dataFlight[1];
  const flight = {};
  flight['departure'] = origin.departure;
  flight['arrival'] = arrival.arrival;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconNavigation navigation={navigation} />,
    });
  }, [navigation, params]);

  function onDateChange(date){
    setDateSelect(date.toString());
  }

  return (
    <View>
      <View style={styles.flightsAddDate}>
        <FlightDeapture flight={flight} style={styles.flighArrival} />
        <FlightArrival flight={flight} style={styles.flighArrival} />
      </View>
      <View style={styles.borderDate}></View>
      <Text>{dateSelect}</Text>
      <Text style={[styles.textTitle, styles.textDateTitle]}>Select date</Text>
      <View style={styles.inputsDate}>
        <CalendarPicker onDateChange={onDateChange} />
        <Button next="AddPassengers" />
      </View>
    </View>
  );
}


function ViewTitle(flight){
  console.log("Flight", flight);
  return(
    <>
      
    </>

  )
}