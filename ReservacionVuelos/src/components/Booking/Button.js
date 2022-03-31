import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import styles from '../../utils/styles/stylesBooking';

export default function Button(props) {
  const {next} = props;
  const navigation = useNavigation();

  const nextSteep = () => {
    navigation.navigate(next);
  };

  return (
    <View style={styles.btnBooking}>
      <Pressable onPress={nextSteep} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        <FontAwesomeIcon icon={faArrowRight} size={18} color="#fff" style={styles.iconButton} />
      </Pressable>
    </View>
  );
}
