import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletScreen from '../Screens/WalletScreen/WalletScreen';
import TransactionScreen from '../Screens/TransactionScreen/TransactionScreen';
import TransferScreen from '../Screens/TransferScreens/TransferScreen';

const Stack = createNativeStackNavigator();

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WalletStack"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Transfer" component={TransferScreen} />
      <Stack.Screen name="Transaction" component={TransactionScreen} />
    </Stack.Navigator>
  );
};

export default WalletStackNavigator;
