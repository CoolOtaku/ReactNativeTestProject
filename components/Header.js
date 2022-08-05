import React from 'react';
import { mainStyle } from '../assets/styles/mainStyle';
import { View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={mainStyle.headerContainer}>
        <Image
          style={mainStyle.headerLogo}
          source={require('../assets/icon.png')}
        />
    </View>
  );
}