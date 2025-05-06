import {Text, View, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';
import React, { useState } from 'react';

export default function Main() {
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Home page</Text>
      </View>
    );
}

const styles = StyleSheet.create({
        
    });