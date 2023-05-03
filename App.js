import React from "react";
import { StyleSheet, View,SafeAreaView } from "react-native";
import StatusBarDesign from "./src/components/statusBar/StatusBarDesign";
import AsyncStorageDemo from "./src/components/asyncStorage/AsyncStorageDemo";

export default function App() {
  return (
    <>
      <StatusBarDesign />
      
      <SafeAreaView style={styles.container}>
          <AsyncStorageDemo/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
  },
});
