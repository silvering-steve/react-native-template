import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MenuButton from '../../Components/MenuButton';
import {
  faHistory,
  faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons';

const CryptoMenu = ({ navigation }) => {
  const handleMenuButton = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View className="flex-row justify-center gap-5 px-2 mt-3">
      <MenuButton
        text="Market"
        icon={faMoneyBillTransfer}
        accessibilityLabel="market button"
        onPress={() => {
          handleMenuButton('Market');
        }}
      />
      <MenuButton
        text="Portofolio"
        accessibilityLabel="portofolio button"
        icon={faHistory}
        onPress={() => {
          handleMenuButton('Portofolio');
        }}
      />
    </View>
  );
};

CryptoMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default CryptoMenu;
