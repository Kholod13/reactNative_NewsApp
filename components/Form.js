import {Text, View, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { gStyle } from '../styles/style';
import React, { useState } from 'react';
import {Formik} from 'formik';

export default function Form({addArticle}) {

    return (
      <View>
        <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}>
          {(props) => (
            <View>
              <TextInput
                style={gStyle.input}
                placeholder='Input name'
                onChangeText={props.handleChange('name')}
                value={props.values.name}
              />
              <TextInput
                style={gStyle.input}
                placeholder='Input anons'
                onChangeText={props.handleChange('anons')}
                value={props.values.anons}
              />
              <TextInput
                style={gStyle.input}
                placeholder='Input full'
                multiline
                onChangeText={props.handleChange('full')}
                value={props.values.full}
              />
              <TextInput
                style={gStyle.input}
                placeholder='Input img'
                onChangeText={props.handleChange('img')}
                value={props.values.img}
              />
              <Button title='Add' onPress={props.handleSubmit}/>
            </View>
          )}
        </Formik>
      </View>
    );
}

const styles = StyleSheet.create({
        
    });