import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {createAppContainer} from 'ract-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/BookTransactionScreen'
import SearchScreen from './screens/SearchScreen'

export default class App extends React.Component {
  render(){
  return (
    <View>
  <AppContainer />
  
  </View>
  )
  }
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
   Search:{screen:SearchScreen}
})

const AppContainer=createAppContainer(
  TabNavigator
)