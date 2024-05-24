import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import WalletScreen from '../Screens/WalletScreen/WalletScreen';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerHeader = ({ navigation }) => {
  const username = 'Haruka Takashi';

  return (
    <SafeAreaView>
      <View className="flex-row mx-5 items-center gap-5 my-5">
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesomeIcon icon={faBars} size={20} />
        </TouchableOpacity>
        <View className="flex-row">
          <Text className="text-xl">Hello, </Text>
          <Text className="text-xl font-bold">{username}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const WalletDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: DrawerHeader
      }}>
      <Drawer.Screen name="Wallet" component={WalletScreen} />
      <Drawer.Screen name="Crypto" component={WalletScreen} />
    </Drawer.Navigator>
  );
};

export default WalletDrawerNavigator;
