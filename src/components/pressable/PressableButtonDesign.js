import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const PressableButtonDesign = () => {
  return (
    <View style={styles.main}>
        <Text>  Pressable Button Design </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
    
})


export default PressableButtonDesign