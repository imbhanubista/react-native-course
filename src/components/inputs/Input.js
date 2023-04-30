import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Input = () => {
    const [name,setName] = useState("");
    const [changingValue,setChangingValue] = useState("");
    const handleClick = ()=>{
        setName(changingValue);
        setChangingValue("");
    }
  return (
    <View>
        <Text> Your name is {name} </Text>
        <TextInput 
            placeholder="Enter your name"
            style={styles.input}
            onChangeText={(val)=>setChangingValue(val)}
            value={changingValue}
        />
        <Button title='Clear Input' onPress={handleClick} />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        borderColor:"red",
        padding:10,
        margin:10,
        width:200,
        borderRadius:10
    }
})


export default Input