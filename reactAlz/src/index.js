import React from 'react'

import { AppRegistry } from "react-native";
import App from "./App.js";
import { name as reactAlz } from "./reactAlz/App.json";  
AppRegistry.registerComponent(reactAlz, () => App);

import main from './src/main/main'
import map from './src/map/map'
import memories from './src/memories/memories'

import { colors } from './src/theme'

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

const myNav = createStackNavigator({
	memories: { screen: memories }
}, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: colors.primary
		},
		headerTintColor: '#fff'
	}
})

const Tabs = createBottomTabNavigator({
	map: { screen: map },
	main: { screen: main },
	memories: { screen: memories },
})

export default Tabs