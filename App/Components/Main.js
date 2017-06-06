// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative;

class Main extends React.Component {
  static navigationOptions = {
    title: 'Welcome to GroovePractice',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (

      <Button
        title="Go to the Location Page"
        onPress={() =>
          navigate('Location', { location: '80202' })
        }
      />
    );
  }
}

module.exports = Main;
