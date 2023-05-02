import React, { useState } from 'react'
import { Text, View,StyleSheet, Button, TextInput } from 'react-native'

const Home = (props) => {
    
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

  return (
    <View style={styles.main}>
        <Text style={styles.content} > Home</Text>
        <TextInput placeholder="Enter your name" style={styles.input} onChangeText={(e)=>setName(e)} />
        <TextInput placeholder="Enter your password" style={styles.input} onChangeText={(e)=>setPassword(e)}/>
        <Button title="Go to Contact" onPress={()=> props.navigation.navigate("Contact", {name,password}) }/>
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
    content:{
        fontSize:30,
        fontWeight:"bold"
    },
    input:{
        borderWidth:1,
        borderColor:"black",
        width:"100%",
        padding:10,
        margin:10
    }


})


export default Home