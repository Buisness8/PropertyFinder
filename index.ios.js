/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative from 'react-native'
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = ReactNative;

class HelloWorld extends Component {
  render() {
    return (
       <Text style={styles.text}>Hello World (Again)</Text>
    );
  }
}

class PropertyFinder extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld,
        }}/>
    );
  }
}


const styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
