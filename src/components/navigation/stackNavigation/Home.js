import React from 'react'
import { Text, View,StyleSheet, Button } from 'react-native'

const Home = (props) => {
    console.log(props)
  return (
    <View style={styles.main}>
        <Text style={styles.content} > Home</Text>
        <Button title="Go to Contact" onPress={()=> props.navigation.navigate("Contact") }/>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    content:{
        fontSize:30,
        fontWeight:"bold"
    }

})


export default Home