import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ItemCard = ({ accessibilityLabel, title, money, phoneNumber }) => {
  return (
    <View
      accessibilityLabel={accessibilityLabel}
      className="basis-2/3 bg-[#023E8A] rounded-3xl pt-5 px-5">
      <Text accessibilityLabel="title" className="basis-1/5 text-white m-1">
        {title}
      </Text>
      <Text
        accessibilityLabel="money"
        className="basis-2/5 text-white text-4xl font-semibold m-1">
        {money}
      </Text>
      <Text
        accessibilityLabel="phoneNumber"
        className="basis-2/5 text-white font-medium m-1">
        {phoneNumber}
      </Text>
    </View>
  );
};

ItemCard.propTypes = {
  accessibilityLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
};

export default ItemCard;
