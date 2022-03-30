import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getFlights} from '../api/flights';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import ListFlights from '../components/Flights/FlaightsList';
import useAuth from '../hooks/useAuth'
import NoLogged from '../components/Account/NoLogged';
import { useFocusEffect } from "@react-navigation/native"
import auth from '@react-native-firebase/auth';

import styles from '../utils/styles/stylesFlights';
import colors from '../utils/colors';

export default function Flights() {
  const navigation = useNavigation();
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {login, auth} = useAuth()
  
  useEffect(() => {
    (async () => {
      await loadFlights();
    })();
  }, []);

  const loadFlights = async () => {
    setIsLoading(true);
    try {
      const response = await getFlights();
      setFlights(response);
      setIsLoading(false);
    } catch (er) {
      setError(er);
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }
  

  return (
    !auth ?  <NoLogged /> :
    <>
      <SafeAreaView style={styles.safeView}>
        <Text style={styles.titleScreen}>My flyghts</Text>
        <ListFlights flights={flights} style={styles.cardFlight} />
      </SafeAreaView>
      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={() => navigation.navigate('Booking')}>
        <FontAwesomeIcon icon={faPlusCircle} size={70} color={colors.PRIMARY_COLOR} />
      </TouchableOpacity>
    </>
  );
}
