import { Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import signUpStyles from '../utils/styles/Styles'

const TextLink = ({ contentText, linkText, routeName }) => {
    const navigation = useNavigation();
    return (
        <View style={signUpStyles.textAccount}>
            <Text>
                {contentText}
            </Text>
            <Pressable onPress={() => navigation.navigate(routeName)}><Text style={{ marginLeft: 5, color: 'blue' }}>{linkText}</Text></Pressable>
        </View>
    )
}

export default TextLink

