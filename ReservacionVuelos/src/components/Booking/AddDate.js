import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import styles from '../../utils/styles/stylesBooking'
import Button from './Button';
import IconNavigation from './IconNavigation';

export default function AddDate(props) {
    const {
        navigation,
        route: {params},
      } = props;
    
      useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <IconNavigation navigation={navigation} />
          ),
        });
      }, [navigation, params]);
  return (
    <View style={styles.containerArrival}>
      <Text style={styles.textTitle}>Select date</Text>
      <Button next='AddPassengers' />
    </View>
  )
}