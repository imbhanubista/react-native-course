import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListRender = ({name,age}) => {
  return (
        <Text style={styles.textList}> {name} </Text>
  )
}

const styles = StyleSheet.create({
    textList:{
        fontSize:20,
        color:"white",
        fontWeight:"semibold",
        margin:10,
        backgroundColor:"gray",
        padding:10,
    }
})


export default ListRender