import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ActionButton = ({
  children,
  type = 'default',
  accessibilityLabel,
  text,
  onPress
}) => {
  const colorButton = () => {
    if (type === 'secondary') return 'bg-[#E7EEFD]';
    if (type === 'disable') return 'bg-gray-400';

    return 'bg-[#2253F6]';
  };

  const colorText = () => {
    if (type === 'secondary') return 'text-[#2253F6]';
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
      className={`${colorButton()} w-100 p-3 rounded-xl flex-row justify-center gap-5 items-center shadow-sm`}>
      {children}
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
  type: PropTypes.oneOf(['primary', 'secondary', 'disable'])
};

export default ActionButton;
