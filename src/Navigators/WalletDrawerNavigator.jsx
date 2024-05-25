import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import WalletScreen from '../Screens/WalletScreen/WalletScreen';
import CryptoScreen from '../Screens/CryptoScreen/CryptoScreen';
import DrawerHeader from '../Components/DrawerHeader';
import DrawerContent from '../Components/DrawerContent';

const Drawer = createDrawerNavigator();

const WalletDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: DrawerHeader
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="Wallet" component={WalletScreen} />
      <Drawer.Screen name="Crypto" component={CryptoScreen} />
    </Drawer.Navigator>
  );
};

export default WalletDrawerNavigator;
