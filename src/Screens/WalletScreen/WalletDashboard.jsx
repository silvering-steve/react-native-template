import React from 'react';
import { View } from 'react-native';
import WalletMenu from './WalletMenu';
import PropTypes from 'prop-types';
import UserInfoCard from '../../Components/UserInfoCard';

const WalletDashboard = ({ balance, phoneNumber, navigation }) => {
  return (
    <View className="basis-4/12">
      <View className="mx-5">
        <UserInfoCard
          money={balance}
          title="Balance"
          phoneNumber={phoneNumber}
        />
        <WalletMenu navigation={navigation} />
      </View>
    </View>
  );
};

WalletDashboard.propTypes = {
  balance: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};

export default WalletDashboard;
