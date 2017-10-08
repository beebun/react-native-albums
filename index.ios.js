// for iOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'meGenome'} />
    <AlbumList />
  </View>
);

// Render it to the device (place it to the screen)
AppRegistry.registerComponent('albums', () => App);
