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

  useEffect(() => {
    flight['date'] = dateSelect;
  }, [dateSelect]);

  function onDateChange(date){
    const options = {year: 'numeric', month: 'long', day: '2-digit'};
    const Fecha = new Date(date.toString());
    const newFecha = Fecha.toLocaleDateString('es-ES', options);
    setDateSelect(Fecha.toDateString());
    ////Mon Apr 04 2022 17:27:40 GMT-0500
  }

  return (
    <View style={{flexDirection:'column', justifyContent:'space-around'}}>
      <View style={styles.flightsAddDate}>
        <FlightDeapture flight={flight} style={styles.flighArrival} />
        <FlightArrival flight={flight} style={styles.flighArrival} />
      </View>
      <View style={styles.borderDate}></View>
      <View style={styles.addDateDetails} >
        <Text>{dateSelect}</Text>
      </View>
      <Text style={[styles.textTitle, styles.textDateTitle]}>Select date</Text>
      <View style={styles.inputsDate}>
        <CalendarPicker onDateChange={onDateChange} />
        <Button next="AddPassengers" data={flight} />
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