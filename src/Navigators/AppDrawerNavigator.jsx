import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CryptoScreen from '../Screens/CryptoScreen/CryptoScreen';
import DrawerContent from '../Components/DrawerContent';
import WalletStackNavigator from './WalletStackNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        gestureEnabled: false
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="Wallet" component={WalletStackNavigator} />
      <Drawer.Screen name="Crypto" component={CryptoScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
