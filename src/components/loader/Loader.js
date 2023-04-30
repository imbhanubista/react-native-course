import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

const Loader = () => {

    // state to show and hide loader
     const [showLoader, setShowLoader] = useState(false)
     const displayLoader = () => {
            setShowLoader(true)
            setTimeout(() => {
                setShowLoader(false)
            }, 3000);
        }


  return (
    <View style={styles.container}>
        <Text style={styles.header}> Activity Indicator (Loader) </Text>
        {
            showLoader && <ActivityIndicator size="large" color="red" />
        }
        <Button title="Click Me" onPress={displayLoader}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        backgroundColor:"yellow",

    },
    header:{
        fontSize:30,
        textAlign:"center",
    }

})


export default Loader