import { Text, Pressable, View, Image } from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/Styles';

const ButtonForm = ({ content, img, disabled = false, ...props }) => {
  return (
    <Pressable
      {...props}
      disabled={disabled}
      style={signUpStyles.buttonContainer}>
      {({ pressed }) => (
        <View style={[
          disabled
            ? signUpStyles.disableButton
            : pressed
              ? signUpStyles.pressedButton
              : signUpStyles.unPressedButton,
          signUpStyles.button
        ]}>
          {img && <Image source={img} style={signUpStyles.img} />}
          <Text style={signUpStyles.buttonText}>{content}</Text>
        </View>
      )}

    </Pressable>
  );
};

export default ButtonForm;
