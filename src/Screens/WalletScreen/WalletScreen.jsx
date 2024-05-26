import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';

import WalletDashboard from './WalletDashboard';
import DrawerHeader from '../../Components/DrawerHeader';

const WalletScreen = ({ navigation }) => {
  const balance = 'Rp' + (100000).toLocaleString();
  const phoneNumber = '081238161748';

  return (
    <SafeAreaView className="flex-1 bg-[#FAFCFF]">
      <DrawerHeader navigation={navigation} />
      <WalletDashboard
        navigation={navigation}
        balance={balance}
        phoneNumber={phoneNumber}
      />
      {/* <View className="basis-8/12 bg-red-100 mt-10">
        <Text>ILY</Text>
      </View> */}
    </SafeAreaView>
  );
};

WalletScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func
  })
};

export default WalletScreen;
