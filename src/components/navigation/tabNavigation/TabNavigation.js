import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// this is for buttton navigation
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// this is for top navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './Home'
import Contact from './Contact'
import About from './About';
// const Tab = createBottomTabNavigator()
const Tab = createMaterialTopTabNavigator()

const TabNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation