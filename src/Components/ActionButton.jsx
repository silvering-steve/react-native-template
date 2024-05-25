import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ActionButton = ({ accessibilityLabel, content, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      className={`${disabled ? 'bg-gray-400' : 'bg-[#023E8A]'} w-100 p-3 rounded-xl`}>
      <Text
        className={`text-center text-xl font-bold ${disabled ? 'text-black' : 'text-white'}`}
        accessibilityLabel="content">
        {content}
      </Text>
    </TouchableOpacity>
  );
};

ActionButton.propTypes = {
  accessibilityLabel: PropTypes.string,
  disabled: PropTypes.bool,
  content: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default ActionButton;
