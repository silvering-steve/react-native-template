import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const TransactionLoadingScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('TransactionDetails')}>
        Transfer Loading
      </Text>
    </SafeAreaView>
  );
};

export default TransactionLoadingScreen;
