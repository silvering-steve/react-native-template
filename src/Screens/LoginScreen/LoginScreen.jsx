import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, View } from 'react-native';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import ActionButton from '../../Components/ActionButton';
import TextInputWithIcon from '../../Components/TextInputWithIcon';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnLogin = () => {
    navigation.replace('App');
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="basis-3/12 justify-center items-center flex-row">
        <Text className="font-poppins font-bold text-5xl text-[#023E8A]">
          CHIP
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
            Login to your existing account to access all the features in CHIPto.
          </Text>
          {/* Form */}
          <View className="mt-5 mx-5">
            <TextInputWithIcon
              icon={faEnvelope}
              placeholder="e-mail / phone"
              accessibilityLabel="email input"
              value={username}
              onChange={setUsername}
            />
          </View>
          <View className="mt-5 mx-5">
            <TextInputWithIcon
              secureTextEntry={true}
              icon={faLock}
              placeholder="password"
              accessibilityLabel="password input"
              value={password}
              onChange={setPassword}
            />
          </View>
          {/* Error */}
          <Text className="text-center text-red-500 mt-5 text-lg font-bold">
            {/* Something Wrong ! */}
          </Text>
          {/* Button */}
          <View className="w-2/3 self-center">
            <ActionButton
              content={'Login'}
              onPress={handleOnLogin}
              accessibilityLabel="login button"
            />
          </View>
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

export default LoginScreen;
