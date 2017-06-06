import React, { Component } from 'react'
var Main = require('./App/Components/Main')
var Location = require('./App/Components/Location')

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
  StackNavigator
} from 'react-navigation'

const GroovePractice = StackNavigator({
  Main: {screen: Main},
  Location: {screen: Location}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

// AppRegistry.registerComponent('GroovePractice', () => GroovePractice)
AppRegistry.registerComponent('GroovePractice', () => GroovePractice)
