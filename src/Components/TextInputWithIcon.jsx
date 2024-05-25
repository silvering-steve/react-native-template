import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const TextInputWithIcon = ({
  icon,
  accessibilityLabel,
  placeholder,
  value,
  onChange,
  secureTextEntry = false
}) => {
  const [hidden, setHidden] = useState(true);

  const handleHiddenPassword = () => {
    setHidden(!hidden);
  };

  return (
    <View
      className="flex-row gap-5 border-b-2 pb-3 border-black/[.3]"
      accessibilityLabel="input set">
      {icon && <FontAwesomeIcon icon={icon} size={25} style={styles.icon} />}
      <View className="flex-1">
        <TextInput
          className="text-xl border-solid"
          placeholder={placeholder}
          accessibilityLabel={accessibilityLabel}
          secureTextEntry={secureTextEntry ? hidden : false}
          value={value}
          onChange={onChange}
        />
      </View>
      <View className="flex-2 justify-end">
        {secureTextEntry && (
          <TouchableOpacity
            onPress={handleHiddenPassword}
            accessibilityLabel="icon eye">
            <FontAwesomeIcon
              testID="eye icon"
              icon={hidden ? faEyeSlash : faEye}
              size={25}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

TextInputWithIcon.propTypes = {
  icon: PropTypes.any.isRequired,
  accessibilityLabel: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool
};

const styles = StyleSheet.create({
  icon: { opacity: 0.5 }
});

export default TextInputWithIcon;
