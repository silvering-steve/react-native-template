import React from 'react';
import { View } from 'react-native';
import MenuButton from '../../Components/MenuButton';
import {
  faCoins,
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';

const WalletMenu = ({ navigation }) => {
  const handleMenuButton = (screen) => {
    navigation.replace(screen);
  };

  return (
    <View className="flex-row justify-center gap-5 px-2 mt-3">
      <MenuButton
        content="Transfer"
        icon={faMoneyBillTransfer}
        accessibilityLabel="transfer button"
        onPress={() => {
          handleMenuButton('Transfer');
        }}
      />
      <MenuButton
        content="Crypto"
        accessibilityLabel="crypto button"
        icon={faCoins}
        onPress={() => {
          handleMenuButton('Crypto');
        }}
      />
    </View>
  );
};

export default WalletMenu;
