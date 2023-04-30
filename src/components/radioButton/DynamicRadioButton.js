import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const DynamicRadioButton = () => {
    const skills = [
        {
            id:1,
            name:"React"
        },
        {
            id:2,
            name:"React Native"
        },
        {
            id:3,
            name:"Node"
        },
        {
            id:4,
            name:"MongoDB"
        },
        {
            id:5,
            name:"Express"
        },]

        const [selectedRadio, setSelectedRadio] = useState(null)



  return (
    <View style={styles.main} >
        <Text> Dynamic Radio Button </Text>
      {
            skills.map((item,index)=>(
                <TouchableOpacity key={index} onPress={()=>setSelectedRadio(item.id)} >
                <View style={styles.radioWrapper}>
                     <View style={styles.radio}>
                         {
                                selectedRadio === item.id && <View style={styles.radioBg}></View>
                         }
                     </View>
                         <Text style={styles.radioText}>{item.name}</Text>
                 </View>
                </TouchableOpacity>
            ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"start",
        backgroundColor:"skyblue",
    },
    radio:{
        height:24,
        width:24,
        borderRadius:12,
        borderWidth:2,
        borderColor:"#f0f0f0",
        alignItems:"center",
        justifyContent:"center",
        marginRight:10,
    },
    radioText:{
        fontSize:16,
        fontWeight:"bold",
    },
    radioWrapper:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
    },
    radioBg:{
        height:12,
        width:12,
        borderRadius:6,
        backgroundColor:"#f0f0f0",
    }
})

export default DynamicRadioButton