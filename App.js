/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

import AppNavigator from './src/navigation/AppNavigation';
import NavigationService from './src/navigation/NavigationService';

export default class App extends Component {
  render() {
    const { store } = configureStore();
    return (
      <Provider store={store}>
        < AppNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    );
  }
}

