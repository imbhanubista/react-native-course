import React from 'react'
import { Text, View,StyleSheet, Pressable } from 'react-native'

const PressableButtonDesign = () => {
  return (
    <View style={styles.main}>
        <Text style={styles.heading} >  Pressable Button Design </Text>
        <Pressable
        onPress={() => alert("Hello World")}
        onLongPress={() => console.warn("You have long pressed")}
        onPressIn={() => console.warn("You have pressed in")}
        onPressOut={() => console.warn("You have pressed out")}
        delayLongPress={3000}
        >
            <Text style={styles.pressableBtn} >Pressable</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontSize:30,
        fontWeight:"bold",
        marginBottom:20,
    },

    pressableBtn:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        backgroundColor:"orange",
        padding:10,
        margin:10,
        borderRadius:20,
        shadowColor:"black",
        elevation:5,
    }


})


export default PressableButtonDesign