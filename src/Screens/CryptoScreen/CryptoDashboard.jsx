import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import UserInfoCard from '../../Components/UserInfoCard';
import CryptoMenu from './CryptoMenu';

const CryptoDashboard = ({ balance, phoneNumber, navigation }) => {
  return (
    <View className="basis-4/12">
      <View className="mx-5">
        <UserInfoCard
          money={balance}
          title="Assets"
          phoneNumber={phoneNumber}
        />
        <CryptoMenu navigation={navigation} />
      </View>
    </View>
  );
};

CryptoDashboard.propTypes = {
  balance: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    replace: PropTypes.func
  })
};

export default CryptoDashboard;
