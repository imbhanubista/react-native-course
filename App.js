import React from "react";
import {  StyleSheet, View } from "react-native";
import StatusBarDesign from "./src/components/statusBar/StatusBarDesign";
import CheckPlatform from "./src/components/checkPlatform/CheckPlatform";

export default function App() {
  return (
    <>
     <StatusBarDesign/>
      <View style={styles.container}>
        {/* Your app content goes here */}
        <CheckPlatform/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
