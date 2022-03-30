import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from '../../utils/styles/stylesAccount';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUnlock
} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';

export default function NoLogged() {
  const navigation = useNavigation();

  const user = auth().currentUser;

  if (user) {
    console.log('User email: ', user.email);
  } {
    console.log("No logged");
  }

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta sección necesitas iniciar sesión
      </Text>
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        <FontAwesomeIcon icon={faUnlock} size={20} color="#fff" />
        <Text style={styles.buttonText}>Ir a login</Text>
      </Pressable>
    </View>
  );
}
