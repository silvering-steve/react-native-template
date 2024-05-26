import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 800);
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center bg-[#023E8A]">
      <Text className="font-poppins font-bold text-[70px] text-[#fff]">
        CHIP
      </Text>
      <Text className="font-poppins font-bold text-[70px] text-[#ADE8F4]">
        to
      </Text>
    </SafeAreaView>
  );
};

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func
  })
};

export default SplashScreen;
