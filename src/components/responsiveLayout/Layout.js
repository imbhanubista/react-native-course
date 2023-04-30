import React from 'react'
import { StyleSheet, View } from 'react-native'

const Layout = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
      <View style={styles.innerBox1}></View>
      <View style={styles.innerBox2}></View>
      <View style={styles.innerBox3}></View>
    </View>
    <View style={styles.box2}></View>
    <View style={styles.box3}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    box1:{
      flex:2,
      backgroundColor:"red",
      flexDirection:"row",
    },
    box2:{
      flex:1,
      backgroundColor:"green",
    },
    box3:{
      flex:1,
      backgroundColor:"blue",
    },
    innerBox1:{
      flex:1,
      backgroundColor :"lightblue",
      margin:2,
    },
    innerBox2:{
      flex:1,
      backgroundColor :"pink",
      margin:2,
    },
    innerBox3:{
      flex:1,
      backgroundColor :"gray",
      margin:2,
    }
  });
export default Layout