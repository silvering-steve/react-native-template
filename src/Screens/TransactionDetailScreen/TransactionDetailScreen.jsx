import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const TransactionDetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Transaction')}>Details</Text>
    </SafeAreaView>
  );
};

export default TransactionDetailScreen;
