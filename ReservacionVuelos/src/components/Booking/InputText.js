import { View, TextInput } from 'react-native'
import React, {useState} from 'react'
import styles from '../../utils/styles/stylesBooking'

export default function InputText() {
    const [query, setQuery] = useState('');
  return (
    <View style={styles.inputContaint}>
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