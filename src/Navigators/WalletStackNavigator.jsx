import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletScreen from '../Screens/WalletScreen/WalletScreen';
import TransactionScreen from '../Screens/TransactionScreen/TransactionScreen';
import TransferStackNavigator from './TransferStackNavigator';

const Stack = createNativeStackNavigator();

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WalletStack"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransferStack"
        component={TransferStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Transaction" component={TransactionScreen} />
    </Stack.Navigator>
  );
};

export default WalletStackNavigator;
