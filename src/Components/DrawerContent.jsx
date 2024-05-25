import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { DrawerItemList } from '@react-navigation/drawer';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const DrawerContent = (props) => {
  const handleOnLogout = () => {
    props.navigation.replace('Login');
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="basis-10/12 mt-4">
        <DrawerItemList {...props} />
      </View>
      <View className="basis-2/12 mt-4">
        <TouchableOpacity
          className="bg-[#EAEDFF] w-5/12 mx-3 py-2 rounded-xl flex-row justify-center items-center gap-2"
          onPress={handleOnLogout}
          accessibilityLabel="logout button">
          <FontAwesomeIcon icon={faSignOut} style={styles.icon} size={15} />
          <Text className="text-lg text-[#514F5B] font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: { color: '#0077B6' }
});

DrawerContent.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func
  })
};

export default DrawerContent;
