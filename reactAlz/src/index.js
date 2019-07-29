import React, {Component} from 'react';

import { AppRegistry } from "react-native";
import App from "/Users/jungwonsuk/Alzheimers/reactAlz/App";
AppRegistry.registerComponent('reactAlz', () => App);

import main from '/Users/jungwonsuk/Alzheimers/reactAlz/src/main/main'
import map from '/Users/jungwonsuk/Alzheimers/reactAlz/src/map/map'
import memories from '/Users/jungwonsuk/Alzheimers/reactAlz/src/memories/memories'

import { colors } from '/Users/jungwonsuk/Alzheimers/reactAlz/src/theme'

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