import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CryptoScreen from '../Screens/CryptoScreen/CryptoScreen';
import MarketScreen from '../Screens/MarketScreens/MarketScreen';
import PortofolioScreen from '../Screens/PortofolioScreen/PortofolioScreen';

const Stack = createNativeStackNavigator();

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WalletStack"
        component={CryptoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="Portofolio" component={PortofolioScreen} />
    </Stack.Navigator>
  );
};

export default WalletStackNavigator;
