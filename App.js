import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import StatusBarDesign from "./src/components/statusBar/StatusBarDesign";

export default function App() {
  return (
    <>
     <StatusBarDesign/>
      <View style={styles.container}>
        {/* Your app content goes here */}
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
