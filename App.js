import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import Main from './components/Main';

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/mt-bold.ttf'),
  'mt-light': require('./assets/fonts/mt-light.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font){
    return (
      <Main />
    );
  }else {
    return (
      <AppLoading 
      startAsync={fonts} 
      onFinish={() => setFont(true)}
      onError={console.warn}/>
    );
  }
}

const styles = StyleSheet.create({
  
});
