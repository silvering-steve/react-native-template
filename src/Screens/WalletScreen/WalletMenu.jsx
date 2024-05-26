import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  faHistory,
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';
import ActionButton from '../../Components/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const WalletMenu = ({ navigation }) => {
  const handleMenuButton = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View className="flex-row justify-center gap-5 px-2 m-3 mt-5">
      <View className="w-2/4 self-center">
        <ActionButton
          text="Transfer"
          type="secondary"
          accessibilityLabel="transfer button"
          onPress={() => {
            handleMenuButton('TransferStack');
          }}>
          <FontAwesomeIcon
            color="#2253F6"
            icon={faMoneyBillTransfer}
            size={25}
          />
        </ActionButton>
      </View>
      <View className="w-2/4 self-center">
        <ActionButton
          text="Transaction"
          type="secondary"
          accessibilityLabel="transaction button"
          onPress={() => {
            handleMenuButton('Transaction');
          }}>
          <FontAwesomeIcon color="#2253F6" icon={faHistory} size={20} />
        </ActionButton>
      </View>
    </View>
  );
};

WalletMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default WalletMenu;
