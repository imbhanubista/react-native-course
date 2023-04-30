import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PressableButtonDesign from "./src/components/pressable/PressableButtonDesign";

export default function App() {
  return <View style={styles.container}>
    <PressableButtonDesign/>
  </View>;
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
  },
 
});