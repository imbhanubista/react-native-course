import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageDemo = () => {
  const [inputFieldData, setInputFieldData] = useState({
    name: "",
    password: "",
  });
 const [all, setAll] = useState({});
  const setData = async () => {
    await AsyncStorage.setItem("user", JSON.stringify(inputFieldData));
    setInputFieldData({ name: "", password: "" });
  };



    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem("user");
          if (jsonValue != null) {
            const data = JSON.parse(jsonValue);
            setAll(data);
          }
        } catch (error) {
          console.error(error);
        }
      };
      

    console.warn(all, "all")

  return (
    <View>
      <Text>AsyncStorageDemo</Text>
      <View style={styles.loginCard}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value= {inputFieldData.name}
          onChangeText={(val) =>
            setInputFieldData({ ...inputFieldData, name: val })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Enter password"
            value= {inputFieldData.password}
          onChangeText={(val) =>
            setInputFieldData({ ...inputFieldData, password: val })
          }
        />
        <Button title="Set Data" onPress={setData} />
      </View>
      <View style={styles.get}>
        <Text>Get Data</Text>
        <Text>Name: {all.name}</Text>
        <Text>Password: {all.password}</Text>
        <Button title="Get Data" onPress={getData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  get: {
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    color: "black",
    padding: 8,
    margin: 10,
  },
  loginCard: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 10,
    backgroundColor: "lightblue",
  },
});

export default AsyncStorageDemo;
