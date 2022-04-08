import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import IconNavigation from './IconNavigation';
import styles from '../../utils/styles/stylesBooking';
import FlightDeapture from '../Flights/FlightDeapture';
import FlightArrival from '../Flights/FlightArrival';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCaretLeft,
  faCaretRight,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import {addFlightFirestore, getFlightsSizeFirestore} from '../../api/flights';
import {useFocusEffect} from '@react-navigation/native';

const numbers = [1, 2, 3, 4, 5];

export default function AddPassengers(props) {
  const {
    navigation,
    route: {params},
  } = props;
  const [passengers, setPassengers] = useState(1);
  const {auth} = useAuth();
  const dataFlight = props.route.params.data;
  dataFlight['user'] = auth.userName;
  const [id, setId] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          loadId(setId, auth.userName);
          dataFlight['id'] = id;
        } catch (error) {
          console.log('Error cities: ', error);
        }
      })();
    }),
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconNavigation navigation={navigation} />,
    });
  }, [navigation, params]);

  useEffect(() => {
    dataFlight['passangers'] = passengers;
  }, [passengers]);

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
      <View style={styles.flightsAddDate}>
        <FlightDeapture flight={dataFlight} style={styles.flighArrival} />
        <FlightArrival flight={dataFlight} style={styles.flighArrival} />
      </View>
      <View style={styles.borderDate}></View>
      <View style={styles.addDateDetails}>
        <Text>{dataFlight.date}</Text>
        <Text>{passengers} passengers</Text>
      </View>
      <Text style={[styles.textTitle, styles.textDateTitle]}>
        How many passengers?
      </Text>
      <View style={styles.inputsDate}>
        <FlatList
          data={numbers}
          renderItem={({item}) => (
            <SelectPassengers
              passengers={passengers}
              setPassengers={setPassengers}
              item={item}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
      <View style={sty.buttonSave}>
        <ButtonSave booking={dataFlight} navigation={navigation} />
      </View>
    </View>
  );
}

const SelectPassengers = ({item, setPassengers, passengers}) => {
  function setNumberViewed(item) {
    setPassengers(item);
  }

  return (
    <TouchableOpacity onPress={() => setNumberViewed(item)}>
      <View style={sty.containerRender}>
        {passengers === item && (
          <FontAwesomeIcon
            icon={faCaretLeft}
            size={25}
            color="#5D60F0"
            style={sty.iconLeft}
          />
        )}
        <Text style={passengers === item ? sty.numberViewed : sty.number}>
          {item}
        </Text>
        {passengers === item && (
          <FontAwesomeIcon
            icon={faCaretRight}
            size={25}
            color="#5D60F0"
            style={sty.iconRight}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const ButtonSave = ({booking, navigation}) => {
  return (
    <View style={styles.btnBooking}>
      <Pressable
        onPress={() => saveBooking(booking, navigation)}
        style={styles.button}>
        <FontAwesomeIcon
          icon={faPlane}
          size={18}
          color="#fff"
          style={sty.iconButtonSave}
        />
        <Text style={styles.buttonText}>Reservar</Text>
      </Pressable>
    </View>
  );
};

async function saveBooking(booking, navigation) {
  try {
    const res = await addFlightFirestore(booking);
    Alert.alert('Vuelo agregado', 'El vuelo ha sido reservado correctamente');
    navigation.navigate('FlightsHome');
  } catch (error) {
    console.log('Error al cargar vuelo: ', error);
  }
}

async function loadId(setId, user) {
  try {
    const response = await getFlightsSizeFirestore(user);
    setId(response);
  } catch (error) {
    throw error;
  }
}

const sty = StyleSheet.create({
  number: {
    color: 'black',
    fontSize: 25,
    opacity: 0.5,
  },
  numberViewed: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
  },
  containerRender: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconLeft: {
    marginRight: 30,
  },
  iconRight: {
    marginLeft: 30,
  },
  buttonSave: {
    alignItems: 'center',
  },
  iconButtonSave: {
    marginTop: 3,
    marginRight: 15,
  },  
});
