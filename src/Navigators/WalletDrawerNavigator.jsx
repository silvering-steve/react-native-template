import React from 'react';

import {
  DrawerItemList,
  createDrawerNavigator
} from '@react-navigation/drawer';

import { faBars, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import WalletScreen from '../Screens/WalletScreen/WalletScreen';
import CryptoScreen from '../Screens/CryptoScreen/CryptoScreen';

const Drawer = createDrawerNavigator();

const DrawerHeader = ({ navigation }) => {
  const username = 'Haruka Takashi';

  return (
    <SafeAreaView className="bg-[#FAFCFF]">
      <View className="flex-row mx-5 items-center gap-5 my-5 ">
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

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="basis-10/12 mt-4">
        <DrawerItemList {...props} />
      </View>
      <View className="basis-2/12 mt-4">
        <TouchableOpacity className="bg-[#EAEDFF] w-5/12 mx-3 py-2 rounded-xl flex-row justify-center items-center gap-2">
          <FontAwesomeIcon icon={faSignOut} style={styles.icon} size={17} />
          <Text className="font-poppins text-md text-[#514F5B] font-semibold">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: { color: '#0077B6' }
});

const WalletDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: DrawerHeader
      }}
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Wallet" component={WalletScreen} />
      <Drawer.Screen name="Crypto" component={CryptoScreen} />
    </Drawer.Navigator>
  );
};

export default WalletDrawerNavigator;
