import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const LoginScreen = ({ navigation }) => {
  const handleOnLogin = () => {
    navigation.replace('Wallet Drawer');
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="basis-3/12 justify-center items-center flex-row">
        <Text className="font-poppins font-bold text-5xl text-[#023E8A]">
          Chip
        </Text>
        <Text className="font-poppins font-bold text-5xl text-[#0096C7]">
          to
        </Text>
      </View>
      <View className="basis-9/12 bg-[#FFF] rounded-t-[50px] pt-10">
        <View className="gap-5 mx-7">
          {/* Login */}
          <Text
            className="text-center text-3xl font-bold"
            accessibilityLabel="login title">
            Login
          </Text>
          <Text className="text-center text-[#3A3D42]/[.6]">
            Login to your existing account to access all the features in Chipto.
          </Text>
          {/* Form */}
          <View className="flex-row items-start gap-5 mt-5 mx-5 border-b-2 pb-3 border-black/[.3]">
            <FontAwesomeIcon icon={faEnvelope} size={25} style={styles.icon} />
            <TextInput
              className="text-xl border-solid"
              placeholder="e-mail / phone"
              accessibilityLabel="email input"
            />
          </View>
          <View className="flex-row items-start gap-5 mt-5 mx-5 border-b-2 pb-3 border-black/[.3]">
            <FontAwesomeIcon icon={faLock} size={25} style={styles.icon} />
            <TextInput
              className="text-xl border-solid"
              placeholder="password"
              accessibilityLabel="password input"
            />
          </View>
          {/* Error */}
          <Text className="text-center text-red-500 mt-5 text-lg font-bold">
            {/* Something Wrong ! */}
          </Text>
          {/* Button */}
          <TouchableOpacity
            className="bg-[#023E8A] w-2/3 self-center p-3 rounded-xl"
            onPress={handleOnLogin}
            accessibilityLabel="login button">
            <Text className="text-center text-xl font-bold text-white">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func
  })
};

const styles = StyleSheet.create({
  icon: { opacity: 0.5 }
});

export default LoginScreen;
