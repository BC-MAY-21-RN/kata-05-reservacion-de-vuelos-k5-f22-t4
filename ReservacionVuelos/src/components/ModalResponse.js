import {View, Modal, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import signUpStyles from '../utils/styles/signUpStyles';

const ModalResponse = ({modalVisible}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={signUpStyles.modalScreen}>
        <View style={signUpStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
          <Text style={signUpStyles.modalText}>Signed Up</Text>
        </View>
      </View>
    </Modal>
  );
};
export default ModalResponse;
