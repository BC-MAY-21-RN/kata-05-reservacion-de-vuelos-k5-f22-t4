import {View, Modal, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const ModalResponse = ({modalVisible}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.69)',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: colors.DARK,
            padding: 30,
            borderRadius: 10,
          }}>
          <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
          <Text
            style={{
              color: colors.PRIMARY_COLOR,
              marginTop: 10,
              fontSize: 20,
              fontFamily: 'Barlow-SemiBold',
            }}>
            Signed Up
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalResponse;
