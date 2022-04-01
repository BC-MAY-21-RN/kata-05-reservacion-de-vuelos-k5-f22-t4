import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Button from './Button';
import IconNavigation from './IconNavigation';
import styles from '../../utils/styles/stylesBooking';

export default function AddPassengers(props) {
  const {
    navigation,
    route: {params},
  } = props;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconNavigation navigation={navigation} />,
    });
  }, [navigation, params]);

  return (
    <View style={styles.containerArrival}>
      <Text style={styles.textTitle}>How many passengers</Text>
      <Button next='Flights' />
    </View>
  );
}
