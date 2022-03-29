import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FlightCard from './FlightCard';
import styles from '../../utils/styles/stylesFlights'

export default function FlaightsList(props) {
    const {flights} = props
  return (
    <FlatList 
      data={flights}
      numColumns={1}
      keyExtractor={(flights) => String(flights.id)}
      renderItem={({item}) => <FlightCard flight={item} />}
      contentContainerStyle={styles.flatListContainer}
    />
  )
}