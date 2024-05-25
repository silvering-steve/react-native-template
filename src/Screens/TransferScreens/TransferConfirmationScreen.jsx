import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const TransactionConfirmationScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('TransferLoading')}>
        Transfer Check Account
      </Text>
    </SafeAreaView>
  );
};

export default TransactionConfirmationScreen;
