import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native";

const ButtonDesign = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}> Success </Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.danger]}> Danger </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}> Warning </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    gap: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  danger: {
    backgroundColor: "red",
  },
  warning: {
    backgroundColor: "orange",
  },
});

export default ButtonDesign;
