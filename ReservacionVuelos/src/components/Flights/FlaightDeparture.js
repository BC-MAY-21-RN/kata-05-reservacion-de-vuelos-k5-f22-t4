import {View, Text, Image} from 'react-native';
import React from 'react';
import {map, capitalize, toUpper} from 'lodash';
import styles from '../../utils/styles/stylesFlights'

export default function FlaightDeparture(props) {
  const {data, align} = props;
  const dStyle = { alignItems: align, ...styles.departure }
  return (
    <View style={dStyle}>
      {map(data, (item, index) => (
        <View style={styles.content}>
          <Text style={styles.abrev}>{toUpper(item.abrev)}</Text>
          <Text style={styles.country}>{capitalize(item.country)}</Text>
          <Image source={{ uri: item.img }} style={styles.imgCountry} />
        </View>
      ))}
    </View>
  );
}
