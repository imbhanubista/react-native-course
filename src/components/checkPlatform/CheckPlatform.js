import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const CheckPlatform = () => {
  return (
    <View>
        <Text style={{fontSize:20}}> Platform : {Platform.OS}  </Text>
        <Text style={{fontSize:20}}> Version : {Platform.Version}  </Text>
        
            {
                Platform.OS === "android" ?
                <View style={styles.box}><Text style={{fontSize:20}}> This is Android </Text></View>
                :
                <View style={styles.box} ><Text style={{fontSize:20}}> This is Android </Text></View>

            }


    </View>
  )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:"orange",
        padding:10,
        margin:10,
        borderRadius:10
    }

})


export default CheckPlatform