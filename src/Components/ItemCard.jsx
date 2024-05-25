import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const ItemCard = ({
  accessibilityLabel,
  imagePath,
  title,
  content,
  subContent,
  rightContent,
  onPress
}) => {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      className="flex flex-row bg-white m-3 p-3 rounded-lg shadow-sm"
      onPress={onPress}>
      <View className="justify-center">
        {imagePath && (
          <Image
            style={styles.image}
            className={'aspect-ratio-1 rounded-3xl'}
            accessibilityLabel="image"
            source={{
              uri: imagePath
            }}
          />
        )}
      </View>

      <View className="flex-1 ml-2 flex-col justify-between">
        {title && (
          <Text
            className="text-sm text-gray-700 m-1"
            accessibilityLabel="title">
            {title}
          </Text>
        )}
        <Text className="text-xl text-bold m-1" accessibilityLabel="content">
          {content}
        </Text>
        {subContent && (
          <Text
            className="text-sm text-gray-600 m-1"
            accessibilityLabel="sub content">
            {subContent}
          </Text>
        )}
      </View>

      <View className="flex-1 justify-center">
        {rightContent && (
          <Text
            className="text-xl text-bold m-2 text-right"
            accessibilityLabel="right content">
            {rightContent}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50
  }
});

ItemCard.propTypes = {
  accessibilityLabel: PropTypes.string,
  imagePath: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  subContent: PropTypes.string,
  rightContent: PropTypes.string,
  onPress: PropTypes.func
};

export default ItemCard;
