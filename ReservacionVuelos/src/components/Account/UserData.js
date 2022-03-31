import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import useAuth from '../../hooks/useAuth';
import {faPersonWalking, faUser, faEnvelope, faCheck} from '@fortawesome/free-solid-svg-icons';
import styles from '../../utils/styles/stylesData';
import colors from '../../utils/colors';

export default function UserData(props) {
  const {auth, logout} = useAuth();
  return (
    <View styles={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.titleBi}>Bienvenido</Text>
        <Text
          style={styles.title}>{`${auth.firstName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu
          title={'Name: '}
          text={`${auth.firstName}`}
          icon={faUser}
        />
        <ItemMenu title={'User: '} text={auth.userName} icon={faCheck} />
        <ItemMenu title={'Email: '} text={`${auth.email}`} icon={faEnvelope} />
      </View>
      <Pressable onPress={logout} style={styles.button}>
        <FontAwesomeIcon icon={faPersonWalking} size={25} color="#fff" />
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

function ItemMenu(props) {
  const {title, text, icon} = props;

  return (
    <View style={styles.itemMenu}>
      <FontAwesomeIcon
        icon={icon}
        color={colors.PRIMARY_COLOR}
        size={25}
        style={styles.icon}
      />
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}
