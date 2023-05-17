import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import {Colors, Images} from '../contants';
import { Display } from '../utils';


const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        backgroundColor = {Colors.DEFAULT_GREEN}
        translucent
        />
        <Image 
        source={Images.LOGO}
        resizeMode="contain"
        style={styles.Image}
        />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  Image: {
    height: Display.setHeight(50),
    width: Display.setWidth(60),
  }
});

export default SplashScreen;
