import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MenuButton from '../../Components/MenuButton';
import {
  faCoins,
  faHistory,
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';

const WalletMenu = ({ navigation }) => {
  const handleMenuButton = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View className="flex-row justify-center gap-5 px-2 mt-3">
      <MenuButton
        text="Transfer"
        icon={faMoneyBillTransfer}
        accessibilityLabel="transfer button"
        onPress={() => {
          handleMenuButton('Transfer');
        }}
      />
      <MenuButton
        text="Transaction"
        accessibilityLabel="transaction button"
        icon={faHistory}
        onPress={() => {
          handleMenuButton('Transaction');
        }}
      />
    </View>
  );
};

WalletMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default WalletMenu;
