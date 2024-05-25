import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import DrawerHeader from '../../Components/DrawerHeader';
import CryptoDashboard from './CryptoDashboard';

const CryptoScreen = ({ navigation }) => {
  const assets = 'Rp ' + (100000).toLocaleString();
  const phoneNumber = '081238161748';

  return (
    <SafeAreaView className="flex-1 bg-[#FAFCFF]">
      <DrawerHeader navigation={navigation} />
      <CryptoDashboard
        navigation={navigation}
        balance={assets}
        phoneNumber={phoneNumber}
      />
      {/* List */}
      {/* <View className="basis-8/12 bg-red-100 mt-10">
        <Text>ILY</Text>
      </View> */}
    </SafeAreaView>
  );
};

CryptoScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func
  })
};

export default CryptoScreen;
