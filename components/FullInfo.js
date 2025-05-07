import {Text, View, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';
import React, { useState } from 'react';

export default function FullInfo({route}) {
  // button GO_BACK
  //const loadScene = () => {
  //  navigation.goBack();
  //}

    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>{route.params.name}</Text>
        <Text>{route.params.news.full}</Text>
        {/* <Button title='GO_BACK' onPress={loadScene} /> */}
      </View>
    );
}

const styles = StyleSheet.create({
        
    });