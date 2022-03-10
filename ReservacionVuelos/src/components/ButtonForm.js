import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonForm = ({value, icon}) => {
  return (
    <Pressable style={{margin: 10}}>
      <View style={styles.button}>
        <Icon style={styles.iconButton} name={icon} size={20} />
        <Text style={styles.buttonText}>{value}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonForm;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Barlow-SemiBold',
  },
  iconButton: {
    marginRight: 10,
    color: 'white',
  },
});
