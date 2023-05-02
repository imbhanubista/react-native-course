import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
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
            <Stack.Screen name="Home" component={Home}
             options={{
                // if you want to hide the header set it to false
                // headerShown: false,
                // if you want to change the title of the header
                // title: 'Home',
                // if you want right and left icons in the header
                headerRight: () => <View style={{ marginRight: 10 }}><Text>Right</Text></View>,
                headerLeft: () => <View style={{ marginLeft: 10 }}><Text>Left</Text></View>,
             }} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigationDemo