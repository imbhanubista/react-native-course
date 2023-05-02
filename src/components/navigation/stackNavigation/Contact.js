import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Contact = (props) => {
  const data = props.route.params
  return (
    <View style={styles.main}>
        <Text> Contact</Text>
        <Text>Data coming from Home Component</Text>
        <Text> {data.name} </Text>
        <Text>  {data.password}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:10
    },
   
  })

export default Contact