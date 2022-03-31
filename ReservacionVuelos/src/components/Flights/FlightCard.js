import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../utils/styles/stylesFlights';
import FlightDeapture from './FlightDeapture';
import FlightArrival from './FlightArrival';

export default function FlightCard(props) {
  const {flight} = props;
  return (
    <View style={styles.cardFlight}>
      <View style={styles.locationsFlights}>
        <FlightDeapture flight={flight} />
        <FlightArrival flight={flight} />        
      </View>
      <View style={styles.detailsFlight}>
        <Text style={styles.details}>{flight.date}</Text>
        <Text style={styles.details}>{flight.passangers} passangers</Text>
      </View>
    </View>
  );
}
