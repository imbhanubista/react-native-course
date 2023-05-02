import React from "react";
import { StyleSheet, View,SafeAreaView } from "react-native";
import StatusBarDesign from "./src/components/statusBar/StatusBarDesign";
import TabNavigation from "./src/components/navigation/tabNavigation/TabNavigation";

export default function App() {
  return (
    <>
      <StatusBarDesign />
      <SafeAreaView style={styles.container}>
        <TabNavigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
