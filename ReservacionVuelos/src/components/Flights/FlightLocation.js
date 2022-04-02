import {View, Text, Image} from 'react-native';
import React from 'react';
import {map, capitalize, toUpper} from 'lodash';
import styles from '../../utils/styles/stylesFlights';

export default function FlightLocation(props) {
  const {data} = props;
  const dStyle = {...styles.departure};
  return (
    <View style={dStyle}>
      <View style={styles.content}>
        <Text style={styles.abrev}>{toUpper(data.abrev)}</Text>
        <Text style={styles.country}>{capitalize(data.country)}</Text>
        <Image source={{uri: data.img}} style={styles.imgCountry} />
      </View>
    </View>
  );
}
