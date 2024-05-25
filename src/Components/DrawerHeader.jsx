import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DrawerHeader = ({ navigation }) => {
  const username = 'Haruka Takashi';

  return (
    <SafeAreaView className="bg-[#FAFCFF]">
      <View className="flex-row mx-5 items-center gap-5 my-5 ">
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          accessibilityLabel="bar button">
          <FontAwesomeIcon icon={faBars} size={20} />
        </TouchableOpacity>
        <View className="flex-row">
          <Text className="text-xl">Hello, </Text>
          <Text className="text-xl font-bold">{username}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

DrawerHeader.propTypes = {
  navigation: PropTypes.shape({
    toggleDrawer: PropTypes.func
  })
};

export default DrawerHeader;
