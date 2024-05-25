import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransferScreen from '../Screens/TransferScreens/TransferScreen';
import TransferCheckAccountScreen from '../Screens/TransferScreens/TransferCheckAccountScreen';
import TransferFormScreen from '../Screens/TransferScreens/TransferFormScreen';
import TransactionConfirmationScreen from '../Screens/TransferScreens/TransferConfirmationScreen';
import TransactionLoadingScreen from '../Screens/TransferScreens/TransferLoadingScreen';
import TransactionDetailScreen from '../Screens/TransactionDetailScreen/TransactionDetailScreen';

const Stack = createNativeStackNavigator();

const TransferStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transfer" component={TransferScreen} />
      <Stack.Screen
        name="TransferCheckAccount"
        component={TransferCheckAccountScreen}
      />
      <Stack.Screen name="TransferForm" component={TransferFormScreen} />
      <Stack.Screen
        name="TransferConfirmation"
        component={TransactionConfirmationScreen}
      />
      <Stack.Screen
        name="TransferLoading"
        component={TransactionLoadingScreen}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default TransferStackNavigator;
