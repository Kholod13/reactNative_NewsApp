import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/style';
import React, { useState } from 'react';

export default function Main({navigation}) {
    const [news, setNews] = useState([
      {name: 'Google', anons: 'Google!!!', full: 'Google is a search engine'},
      {name: 'Apple', anons: 'Apple!!!', full: 'Apple is a device corporation'},
      {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is a social network'},
    ]);
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Home page</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullInfo', {news: item})}>
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>  
          </TouchableOpacity>
        )} />
      </View>
    );
}

const styles = StyleSheet.create({
        
    });