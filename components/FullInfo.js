import {Text, View, StyleSheet, ScrollView } from 'react-native';
import { gStyle } from '../styles/style';
import React, { useState } from 'react';

export default function FullInfo({route}) {
  // button GO_BACK
  //const loadScene = () => {
  //  navigation.goBack();
  //}

    return (
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={gStyle.main}>
          <Text style={gStyle.title}>{route.params.news.name}</Text>
          <Text style={styles.text}>{route.params.news.full}</Text>
          {/* <Button title='GO_BACK' onPress={loadScene} /> */}
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
        text: {
          fontSize: 26,
          fontFamily: 'mt-light',
          textAlign: 'center',
          paddingTop: 20,
        },
    });