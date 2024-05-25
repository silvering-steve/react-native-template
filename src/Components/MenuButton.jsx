import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const MenuButton = ({ accessibilityLabel, icon, text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      className="bg-[#EAEDFF] w-3/6 self-center p-3 rounded-xl flex-row justify-center gap-5 items-center">
      <FontAwesomeIcon icon={icon} style={styles.icon} size={30} />
      <Text
        accessibilityLabel="content"
        className="text-xl text-[#514F5B] font-semibold">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: { color: '#0077B6' }
});

MenuButton.propTypes = {
  accessibilityLabel: PropTypes.string,
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default MenuButton;
