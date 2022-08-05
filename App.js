import React, {useState} from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { mainStyle } from './assets/styles/mainStyle';
import { useFonts } from 'expo-font';
import { FloatingAction } from "react-native-floating-action";

import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [loaded] = useFonts({
    'pa-re': require('./assets/fonts/Pacifico-Regular.ttf')
  });
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купити молоко', index: 1},
    {text: 'Покурити', index: 2},
    {text: 'Випити з пацанами', index: 3},
    {text: 'Поспати', index: 4}
  ])
  const actions = [
    {
      icon: require("./assets/icon.png"),
      text: "Video",
      name: "bt_videocam",
      position: 0
    }
  ];

  if (!loaded) {
    return (
      <View style={mainStyle.loader}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View style={mainStyle.mainContainer}>
      <Header/>
      <View style={mainStyle.container}>
        <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem item={item}/>
        )} />
      </View>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );

}

/*
<Text style={mainStyle.text}>Hi!!</Text>


const [listOfItems, setListOfItems] = useState([
    {text: 'Купити молоко', index: 1},
    {text: 'Покурити', index: 2},
    {text: 'Випити з пацанами', index: 3},
    {text: 'Поспати', index: 4}
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, index: 5},
        ...list
      ]
    })
  }*/

  /*<Form addHandler={addHandler}/>
        <View>
          <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem item={item}/>
          )} />
        </View>*/