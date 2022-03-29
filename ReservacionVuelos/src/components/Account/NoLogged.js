import { View, Text } from 'react-native'
import React from 'react'
import ButtonForm from '../ButtonForm';
import { useNavigation } from "@react-navigation/native";

export default function NoLogged() {

    const navigation = useNavigation();
    const goLogin = () => {
        navigation.navigate("Login")
    }
  return (
    <View>
      <ButtonForm
        content='Ir a Login'
        onPress={goLogin}
        disabled={false}
      />
    </View>
  )
}