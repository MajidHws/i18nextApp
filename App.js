/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-community/async-storage';


import { useTranslation } from 'react-i18next';

const App: () => React$Node = () => {
   const { t, i18n } = useTranslation();
    const rtl = i18n.language === 'ar' ? 'right' : 'auto'

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang).then(async () => {
        AsyncStorage.setItem('lang', lang).then(() => {
          // AsyncStorage.getItem('lang').then(lang => alert(`stored lang is: ${lang}`))
        })
      })
    }

   

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
<Button onPress={() => changeLanguage('en')} title="EN"/>
<Button onPress={() => changeLanguage('ar')} title="AR"/>
            <Text style={{textAlign: rtl}}>{t('welcome')}, NAWAL</Text>
            <Text>{i18n.language}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
