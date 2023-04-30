import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StaticGrid = () => {
  return (
    <View>
        <Text style={{fontSize:20, color:"white"}}> StaticGrid Sample </Text>
        <View style={styles.gridContainer}>
            <Text style={styles.gridItem}>Hello</Text>
            <Text style={styles.gridItem}>Hello</Text>
            <Text style={styles.gridItem}>Hello</Text>
            <Text style={styles.gridItem}>Hello</Text>
            <Text style={styles.gridItem}>Hello</Text>
            <Text style={styles.gridItem}>Hello</Text>
            <Text style={styles.gridItem}> Hello</Text>
            <Text style={styles.gridItem}>Hello</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    gridContainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
    },
    gridItem:{
        backgroundColor:"red",
        width:100,
        height:100,
        margin:10,
        padding:10,
        color:"white",
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
    }
})

export default StaticGrid