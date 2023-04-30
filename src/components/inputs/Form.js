import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Form = () => {
    const [data,setData] = useState({});//{firstname:"",lastname:"",email:"",address:""}
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const handleClick = ()=>{
        setData({firstname,lastname,email,address});
        setFirstname("");
        setLastname("");
        setEmail("");
        setAddress("");
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Form Sample </Text>
        <TextInput placeholder="Enter your firstname" style={styles.input} onChangeText={(val)=>setFirstname(val)} value={firstname} />
        <TextInput placeholder="Enter your last name" style={styles.input} onChangeText={(val)=>setLastname(val)} value={lastname}/>
        <TextInput placeholder="Enter your email" style={styles.input} onChangeText={(val)=>setEmail(val)} value={email}/>
        <TextInput placeholder="Enter your Address" style={styles.input} onChangeText={(val)=>setAddress(val)} value={address}/>
        <Button title="Submit " onPress={handleClick} />
        <View style={{margin:4}}>
            <Text> Firstname : {data.firstname} </Text>
            <Text> Lastname : {data.lastname} </Text>
            <Text> Email : {data.email} </Text>
            <Text> Address : {data.address} </Text>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"gray",
        alignItems:"center",
        minHeight:200,
        minWidth:300,
        borderRadius:10,
        padding:10,
    },
    title:{
        fontSize:20,
        color:"white",
        fontWeight:"semibold",
        margin:10,
    },
    input:{
        borderWidth:2,
        borderColor:"lightgray",
        padding:8,
        margin:10,
        width:200,
        borderRadius:10
    },
  

})


export default Form