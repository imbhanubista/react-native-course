import React, { useState } from 'react'
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native'

const RadioButtonDesign = () => {
    const [selectedRadio, setSelectedRadio] = useState(null)
  return (
    <View style={styles.main}>
        <Text style={{marginBottom:10}}> Radio Button Design </Text>
            <TouchableOpacity onPress={()=>setSelectedRadio(1)} >
                <View style={styles.radioWrapper}>
                    <View style={styles.radio} >
                        {
                            selectedRadio === 1 && <View style={styles.radioBg}></View> 
                        }
                    </View>
                <Text style={styles.radioText} > Radio Button </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>setSelectedRadio(2)} >
                <View style={styles.radioWrapper}>
                    <View style={styles.radio} >
                        {
                            selectedRadio === 2 && <View style={styles.radioBg}></View>
                        }
                    </View>
                <Text style={styles.radioText} > Radio Button </Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightblue",
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


export default RadioButtonDesign