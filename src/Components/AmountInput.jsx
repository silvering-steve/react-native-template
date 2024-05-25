import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const AmountInput = ({ accessibilityLabel, value, onChange }) => {
  return (
    <View className="items-center" accessibilityLabel="input amount set">
      <TextInput
        accessibilityLabel={accessibilityLabel}
        style={styles.input}
        placeholder="0.00"
        keyboardType="number-pad"
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

AmountInput.propTypes = {
  accessibilityLabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  input: {
    fontSize: 70
  }
});

export default AmountInput;
