import {Text, View, StyleSheet, ScrollView, Button, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import React, { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Main({navigation}) {
    const [news, setNews] = useState([
      {name: 'Google', anons: 'Google is a global technology company best known for its powerful search engine, but it has expanded far beyond that. ', full: 'Google is a global technology company best known for its powerful search engine, but it has expanded far beyond that. From Android phones to AI tools, Google touches almost every aspect of modern digital life. Its parent company, Alphabet Inc., also oversees projects in healthcare, autonomous driving, and cloud computing. Whether youre searching for information or using Google Maps to find your way, chances are you interact with Googles technology every day—often without even realizing it.', key: '1', img: 'https://nova-ott-images-tn.ssl.cdn.cra.cz/r696x392/2b93d9a9-bf17-4151-ba55-c68fde8b607e'},
      {name: 'Apple', anons: 'Apple is a tech giant renowned for its sleek design, user-friendly products, and cult-like brand loyalty.', full: 'Apple is a tech giant renowned for its sleek design, user-friendly products, and cult-like brand loyalty. From the groundbreaking iPhone to the powerful MacBook lineup, Apple has redefined how people interact with technology. With its closed ecosystem, seamless software-hardware integration, and iconic minimalist aesthetic, Apple continues to shape trends in consumer electronics, software, and services. Whether youre editing videos on a Mac or checking your health stats on an Apple Watch, Apple is always just a tap away.', key: '2', img: 'https://1291668043.rsc.cdn77.org/getthumbnail.aspx?q=60&crop=1&h=450&w=800&id_file=690941832'},
      {name: 'Facebook', anons: 'Facebook, now part of Meta Platforms Inc., began as a simple social networking site for college students and evolved into one of the most influential digital platforms in history.', full: 'Facebook, now part of Meta Platforms Inc., began as a simple social networking site for college students and evolved into one of the most influential digital platforms in history. With billions of users worldwide, Facebook connects people across continents, fuels community discussions, and shapes how news and trends spread globally. Despite controversies over data privacy and content moderation, its impact on communication, business, and culture remains immense. Whether sharing a memory, joining a group, or scrolling through the feed, Facebook continues to be a digital reflection of modern social life.', key: '3', img: 'https://www.newstream.cz/uploads/article/660x464_fit/iStock-500552643.jpg'},
    ]);

    const [modalVisible, setModalWindow] = useState(false);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Modal visible={modalVisible} animationType='slide'>
          <View>
            <Text style={gStyle.title}>Add News</Text>
          </View>
          <MaterialCommunityIcons style={styles.add} name="close-box" size={44} color="black" 
          onPress={()=> setModalWindow(false)} />
        </Modal>
        <View style={gStyle.main}>
          <MaterialIcons name="add-box" color="black" style={styles.add} size={44} 
          onPress={()=> setModalWindow(true)}/>
          <Text style={gStyle.title}>News</Text>
          <FlatList data={news} renderItem={({item}) => (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('FullInfo', {news: item})}>
              <Text style={styles.text}>{item.name}</Text>
              <Image source={{uri: item.img}} style={{width: '100%', height: 200}}/>
              <Text style={styles.underText}>{item.anons}</Text>  
            </TouchableOpacity>
          )} />
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    add:{
      textAlign: 'center',
    },
      text: {
        fontSize: 26,
        fontFamily: 'mt-light',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
      },
      underText: {
        fontSize: 16,
        fontFamily: 'mt-light',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
      },
    });