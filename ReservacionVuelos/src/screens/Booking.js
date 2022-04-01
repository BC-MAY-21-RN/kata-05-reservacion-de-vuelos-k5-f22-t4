import { View, Text} from 'react-native'
import React, {useEffect} from 'react'
import styles from '../utils/styles/stylesBooking'
import Button from '../components/Booking/Button';
import InputText from '../components/Booking/InputText';
import IconNavigation from '../components/Booking/IconNavigation';

export default function Booking(props) {
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
    <View style={styles.containerFeacture}>
      <Text style={styles.textTitle}>Where are you now?</Text>
      <InputText />
      <Button next='AddArrival' />
    </View>
  )
}