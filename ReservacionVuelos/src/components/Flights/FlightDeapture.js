import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlaneDeparture} from '@fortawesome/free-solid-svg-icons';
import FlightLocation from './FlightLocation';
import colors from '../../utils/colors';
import styles from '../../utils/styles/stylesFlights';

export default function FlightDeapture(props) {
  const {flight} = props;

  return (
    <>
      <FlightLocation data={flight.departure} align="flex-start" />
      <View style={styles.imgDeapture}>
        <FontAwesomeIcon
          icon={faPlaneDeparture}
          color={colors.PRIMARY_COLOR}
          size={40}
        />
      </View>
    </>
  );
}
