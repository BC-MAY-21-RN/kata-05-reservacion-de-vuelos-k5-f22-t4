import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import styles from '../../utils/styles/stylesBooking';
import {capitalize} from 'lodash';

export default function ListCities(props) {
  const {cities, isVisible, setSelect} = props;
  return !isVisible ? (
    <View></View>
  ) : (
    <FlatList
      data={cities}
      style={styles.listCities}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Pressable onPress={() => setSelect(item)} style={styles.listCityItem}>
          <Image source={{uri: item.img}} style={styles.imgCity} />
          <Text style={styles.textItem}>
            {capitalize(item.name)}, {capitalize(item.country)}
          </Text>
        </Pressable>
      )}
    />
  );
}