import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import WalletDashboard from './WalletDashboard';

const WalletScreen = ({ navigation }) => {
  const balance = 'Rp ' + (100000).toLocaleString();
  const phoneNumber = '081238161748';

  return (
    <SafeAreaView className="flex-1 bg-[#FAFCFF]">
      <WalletDashboard
        navigation={navigation}
        balance={balance}
        phoneNumber={phoneNumber}
      />
      <View className="basis-8/12 bg-red-100 mt-10">
        <Text>ILY</Text>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
