import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DynamicGrid = () => {
    const userList =[
        {
            id:1,
            name:"A",
            age:20,
        },
        {
            id:2,
            name:"B",
            age:20,
        },
        {
            id:3,
            name:"C",
            age:20,
        },
        {
            id:4,
            name:"D",
            age:20,
        },
        {
            id:5,
            name:"E",
            age:20,
        },
        {
            id:6,
            name:"F",
            age:20,
        },
        {
            id:7,
            name:"G",
            age:20,
        }
    ]
  return (
    <View style={styles.gridContainer}>
        {
            userList.map((item)=>{
                return(
                        <Text style={styles.gridItem}>{item.name}</Text>
                )
            }
            )
        }
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
export default DynamicGrid