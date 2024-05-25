import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const TransactionScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('TransferCheckAccount')}>
        Transfer
      </Text>
    </SafeAreaView>
  );
};

export default TransactionScreen;
