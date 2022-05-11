import React from 'react'
import { createAppContainer } from "react-navigation"; 
import { createStackNavigator } from "react-navigation-stack"; 
import { createMaterialTopTabNavigator } from "react-navigation-tabs"; 
import { RFValue } from "react-native-responsive-fontsize";
import HomeScreen from './screens/homescreen'
import Popular from './screens/popular'
import Recommended from './screens/recommended';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppTopNavigator = createMaterialTopTabNavigator({
  Recommended:{
    screen: Recommended,
    navigationOptions: { 
      tabBarLabel: "Recommended Articles", 
      tabBarOptions: { 
        tabStyle: { backgroundColor: "lightyellow" }, 
      labelStyle: { color: "darkbrown" }, 
      indicatorStyle: { backgroundColor: "darkbrown" } } }
  } ,
  Popular:{
    screen: Popular,
    navigationOptions: { 
      tabBarLabel: "Popular Articles", 
      tabBarOptions: { 
        tabStyle: { backgroundColor: "lightyellow" }, 
      labelStyle: { color: "darkbrown" }, 
      indicatorStyle: { backgroundColor: "darkbrown" } } }
  }
})

const AppStackNavigator = createStackNavigator(
  { Home: { 
    screen: HomeScreen, 
    navigationOptions: { headerShown: false } }, 
    AppTopNav: { 
      screen: AppTopNavigator, 
      navigationOptions: { 
        headerBackTitle: null, 
        headerTintColor: "lightyellow", 
        headerTitle: "Recommended Articles", 
        headerStyle: { backgroundColor: "#d500f9" }, 
        headerTitleStyle: { color: "lightyellow", fontWeight: "bold", fontSize: RFValue(18) } } } }, 
        { initialRouteName: "Home" }
)

const AppContainer = createAppContainer(AppStackNavigator)