import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const Toggle = ({toggle}) => {
    console.warn(toggle)
  return (
    <View>
        <Text> Hello Toggle Button is TRUE </Text>
    </View>
  )
}

export default Toggle