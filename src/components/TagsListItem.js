import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../contants';

const TagsListItem = ({name, isActive, selectTags}) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          isActive ? styles.activeTagsText : styles.inActiveTagsText
        }
        onPress={() => selectTags(name)}>
        {name}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_YELLOW,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
  },
  activeTagsText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  inActiveTagsText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.INACTIVE_GREY,
  },
});

export default TagsListItem;