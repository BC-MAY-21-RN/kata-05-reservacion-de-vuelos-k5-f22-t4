import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../utils/styles/stylesBooking';
import Button from '../components/Booking/Button';
import InputText from '../components/Booking/InputText';
import IconNavigation from '../components/Booking/IconNavigation';
import useAuth from '../hooks/useAuth';

export default function Booking(props) {
  const {
    navigation,
    route: {params},
  } = props;
  const {auth} = useAuth()
  const [booking, setBooking] = useState([auth.userName])
  const [data, setData] = useState()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconNavigation navigation={navigation} />,
    });
  }, [navigation, params]);

  return (
    <View style={styles.containerFeacture}>
      <Text style={styles.textTitle}>Where are you now?</Text>
      <InputText setData={setData} />
      <Button next="AddArrival" data={data} />
    </View>
  );
}
