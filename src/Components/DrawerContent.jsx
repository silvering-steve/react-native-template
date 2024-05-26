import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import ActionButton from './ActionButton';

const DrawerContent = (props) => {
  const handleOnLogout = () => {
    props.navigation.replace('Login');
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="basis-10/12 mt-4">
        <DrawerItemList {...props} />
      </View>
      <View className="basis-2/12 w-1/2 mx-4">
        <ActionButton
          text="Logout"
          onPress={handleOnLogout}
          accessibilityLabel="logout button"
          type="secondary">
          <FontAwesomeIcon icon={faSignOut} color="#2253F6" size={15} />
        </ActionButton>
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
