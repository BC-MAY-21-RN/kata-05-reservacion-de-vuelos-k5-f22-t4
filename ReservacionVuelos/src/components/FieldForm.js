import {Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import signUpStyles from '../utils/styles/Styles';
import {useField} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';

const FieldForm = ({label, securePass, ...props}) => {
  const [field, meta, helpers] = useField(props);
  const [showPass, setShowPass] = useState(securePass);
  const [rightIcon, setRightIcon] = useState('eye');

  const handleShowPass = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
      setShowPass(!showPass);
    } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
      setShowPass(!showPass);
    }
  };
  return (
    <View style={signUpStyles.field}>
      {console.log(props.secureTextEntry)}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={signUpStyles.labelForm}>{label}</Text>
        {meta.error && meta.touched && (
          <Text style={{color: 'red', marginLeft: 5}}>{meta.error}</Text>
        )}
      </View>
      <View>
        <TextInput
          {...props}
          secureTextEntry={showPass}
          value={field.value}
          onBlur={() => helpers.setTouched(!meta.touched)}
          onChangeText={helpers.setValue}
          style={signUpStyles.inputForm}
        />
        {label == 'Password*' && (
          <>
            {props.screen == 'signup' && (
              <Text style={{fontSize: 14}}>
                Use 8 or more characters with a mix letters, numbers and
                symbols.
              </Text>
            )}
            <Pressable
              onPress={() => {
                handleShowPass();
              }}
              style={{position: 'absolute', right: 10, top: 10}}>
              <Icon name={rightIcon} size={20} color={colors.GRAY} />
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default FieldForm;
