import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

export default function IconNavigation(props) {
  const {navigation} = props;
  return (
    <FontAwesomeIcon
      icon={faAngleLeft}
      color="#5DADE2"
      size={30}
      style={{marginLeft: 20, marginTop: 20}}
      onPress={navigation.goBack}
    />
  );
}
