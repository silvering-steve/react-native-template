import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const UserInfoCard = ({ accessibilityLabel, title, money, phoneNumber }) => {
  return (
    <View
      accessibilityLabel={accessibilityLabel}
      className="bg-[#2253F6] rounded-3xl p-10">
      <Text accessibilityLabel="title" className="text-white mb-7">
        {title}
      </Text>
      <Text
        accessibilityLabel="money"
        className="text-white text-4xl font-semibold mb-7">
        {money}
      </Text>
      <Text accessibilityLabel="phoneNumber" className="text-white font-medium">
        {phoneNumber}
      </Text>
    </View>
  );
};

UserInfoCard.propTypes = {
  accessibilityLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};

export default UserInfoCard;
