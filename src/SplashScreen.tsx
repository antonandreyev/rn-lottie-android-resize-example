import Lottie from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';

export const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        flex: 1,
      }}>
      <Lottie
        source={require('../assets/splash.lottie.json')}
        autoPlay
        loop={false}
        resizeMode="contain"
        style={{
          backgroundColor: 'blue',
          flex: 1,
        }}
      />
    </View>
  );
};
