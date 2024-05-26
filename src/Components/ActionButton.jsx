import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ActionButton = ({
  type = 'default',
  accessibilityLabel,
  text,
  onPress
}) => {
  const colorButton = () => {
    if (type === 'white') return 'bg-white';
    if (type === 'disable') return 'bg-gray-400';

    return 'bg-[#023E8A]';
  };

  const colorText = () => {
    if (type === 'white') return 'text-[#0077B6]';
    if (type === 'disable') return 'text-black';

    return 'text-white';
  };

  const disable = () => {
    return type === 'disable';
  };

  return (
    <TouchableOpacity
      disabled={disable()}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      className={`${colorButton()} w-100 p-3 rounded-xl shadow-sm`}>
      <Text
        className={`text-center text-xl font-bold ${colorText()}`}
        accessibilityLabel="content">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

ActionButton.propTypes = {
  accessibilityLabel: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['white', 'disable', 'default'])
};

export default ActionButton;
