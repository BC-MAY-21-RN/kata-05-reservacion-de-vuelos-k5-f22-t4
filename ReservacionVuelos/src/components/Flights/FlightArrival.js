import {View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlaneArrival} from '@fortawesome/free-solid-svg-icons';
import FlaightLocation from './FlaightLocation';
import colors from '../../utils/colors';
import styles from '../../utils/styles/stylesFlights';

export default function FliaghtArrival(props) {
  const {flight} = props;
  return (
    <>
      <View style={styles.imgArrival}>
        <FontAwesomeIcon
          icon={faPlaneArrival}
          color={colors.PRIMARY_COLOR}
          size={40}
        />
      </View>
      <FlaightLocation data={flight.arrival} align="flex-end" />
    </>
  );
}
