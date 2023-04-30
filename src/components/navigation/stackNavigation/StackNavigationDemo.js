import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
import Home from './Home'
import Contact from './Contact'

const Stack = createNativeStackNavigator()


const StackNavigationDemo = () => {
  return (
    // this is the root component of the navigation tree
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'orange',
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigationDemo