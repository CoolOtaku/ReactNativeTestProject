import React from 'react';
import { Text, View } from 'react-native';
import { mainStyle } from '../assets/styles/mainStyle';
import { LinearGradient } from 'expo-linear-gradient';

export default function ListItem({ item }) {
  return (
    <LinearGradient style={[mainStyle.itemContainer, mainStyle.container]}
      colors={['#2b2a29', '#6b3823', '#781e1f']}
      >
      <Text style={mainStyle.title}>{item.text}</Text>
    </LinearGradient>
  );
}