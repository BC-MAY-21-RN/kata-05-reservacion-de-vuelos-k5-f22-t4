import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlaneDeparture} from '@fortawesome/free-solid-svg-icons';
import FlightLocation from './FlightLocation';
import colors from '../../utils/colors';
import styles from '../../utils/styles/stylesFlights';

export default function FlightDeapture(props) {
  const {flight, type} = props;

  return (
    <>
      <FlightLocation data={flight.departure} />
      {!type ? (
        <View style={styles.imgDeapture}>
          <FontAwesomeIcon
            icon={faPlaneDeparture}
            color={colors.PRIMARY_COLOR}
            size={40}
          />
        </View>
      ) : null}
    </>
  );
}
