import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../Components/DrawerContent';
import WalletStackNavigator from './WalletStackNavigator';
import CryptoStackNavigator from './CryptoStackNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        gestureEnabled: false
      }}
      drawerContent={DrawerContent}
      useLegacyImplementation={false}>
      <Drawer.Screen name="Wallet" component={WalletStackNavigator} />
      <Drawer.Screen name="Crypto" component={CryptoStackNavigator} />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
