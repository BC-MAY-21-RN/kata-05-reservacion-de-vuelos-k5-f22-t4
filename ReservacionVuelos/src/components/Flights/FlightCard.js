import {View, Text} from 'react-native';
import React from 'react';
import FlaightDeparture from './FlaightDeparture';
import styles from '../../utils/styles/stylesFlights';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPlaneDeparture,
  faPlaneArrival,
} from '@fortawesome/free-solid-svg-icons';
import colors from '../../utils/colors';

export default function FlightCard(props) {
  const {flight} = props;
  return (
    <View style={styles.cardFlight}>
      <View style={styles.locationsFlights}>
        <FlaightDeparture data={flight.departure} align='flex-start' />
        <View style={styles.imgDeapture}>
          <FontAwesomeIcon
            icon={faPlaneDeparture}
            color={colors.PRIMARY_COLOR}
            size={40}
          />
        </View>
        <View style={styles.imgArrival}>
          <FontAwesomeIcon
            icon={faPlaneArrival}
            color={colors.PRIMARY_COLOR}
            size={40}
          />
        </View>
        <FlaightDeparture data={flight.arrival} align='flex-end' />
      </View>
      <View style={styles.detailsFlight}>
        <Text style={styles.details}>{flight.date}</Text>
        <Text style={styles.details}>{flight.passangers} passangers</Text>
      </View>
    </View>
  );
}
