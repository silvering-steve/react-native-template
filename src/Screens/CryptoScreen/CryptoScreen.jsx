import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {
  faCoins,
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import UserInfoCard from '../../Components/UserInfoCard';
import MenuButton from '../../Components/MenuButton';
import DrawerHeader from '../../Components/DrawerHeader';

const CryptoScreen = ({ navigation }) => {
  const assets = 'Rp ' + (100000).toLocaleString();
  const phoneNumber = '081238161748';

  return (
    <SafeAreaView className="flex-1 bg-[#FAFCFF]">
      <DrawerHeader navigation={navigation} />

      {/* <View className="basis-4/12">
        <View className="mx-5">
          <UserInfoCard
            money={assets}
            title="Assets"
            phoneNumber={phoneNumber}
          />
          <View className="flex-row justify-center gap-5 px-2 mt-3">
            <MenuButton content="Transfer" icon={faMoneyBillTransfer} />
            <MenuButton content="Crypto" icon={faCoins} />
          </View>
        </View>
      </View> */}
      {/* List */}
      {/* <View className="basis-8/12 bg-red-100 mt-10">
        <Text>ILY</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default CryptoScreen;
