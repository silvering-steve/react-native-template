import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCoins,
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';

const WalletScreen = () => {
  const balance = (100000).toLocaleString();
  const phoneNumber = '081238161748';

  return (
    <SafeAreaView className="flex-1 bg-[#FAFCFF]">
      <View className="basis-4/12">
        <View className="mx-5">
          {/* Balance */}
          <View className="basis-2/3 bg-[#023E8A] rounded-3xl pt-5 px-5">
            <Text className="basis-1/5 text-white mt-2">Balance</Text>
            <Text className="basis-2/5 text-white text-4xl font-semibold mt-1">
              Rp. {balance}
            </Text>
            <Text className="basis-2/5 text-white font-medium mt-2">
              {phoneNumber}
            </Text>
          </View>
          {/* Button */}
          <View className="flex-row justify-center gap-5 px-2 mt-3">
            <TouchableOpacity className="bg-[#EAEDFF] w-3/6 self-center p-3 rounded-xl flex-row justify-center gap-5 items-center">
              <FontAwesomeIcon
                icon={faMoneyBillTransfer}
                style={styles.icon}
                size={30}
              />
              <Text className="text-xl text-[#514F5B] font-semibold">
                Transfer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#EAEDFF] w-3/6 self-center p-3 rounded-xl flex-row justify-center gap-5 items-center">
              <FontAwesomeIcon icon={faCoins} style={styles.icon} size={30} />
              <Text className="text-xl text-[#514F5B] font-semibold">
                Crypto
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* List */}
      <View className="basis-8/12 bg-red-100 mt-10">
        <Text>ILY</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: { color: '#0077B6' }
});

export default WalletScreen;
