import { View, Text, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import styles from '../utils/styles/stylesFlights'

export default function Booking(props) {
  const {
    navigation,
    route: {params},
  } = props;
  const [query, setQuery] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesomeIcon
          icon={faAngleLeft}
          color="#5DADE2"
          size={30}
          style={{marginLeft: 20, marginTop: 20}}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  return (
    <View style={styles.containerGral}>
      <Text style={styles.textTitle}>Where are you now?</Text>
      <TextInput
        autoCapitalize='words'
        autoCorrect={false}
        clearButtonMode="always"
        style={styles.input}
        value={query}
        onChangeText={queryText => handleSearch(queryText)}
        placeholder="Search"
      />
    </View>
  )
}