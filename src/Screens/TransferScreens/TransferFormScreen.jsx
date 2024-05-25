import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const TransactionFormScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('TransferConfirmation')}>
        Transfer Form
      </Text>
    </SafeAreaView>
  );
};

export default TransactionFormScreen;
