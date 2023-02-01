import { StatusBar } from "expo-status-bar";
import { ref, remove, set, update } from "firebase/database";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import { CustomButton, CustomTextInput } from "./src/common_components";
import { db } from "./src/config";

export default function App() {
  const [identity, setIdentity] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const addUser = async () => {
    try {
      await set(ref(db, "users/" + Date.now()), {
        username: name,
        indentityNumber: identity,
        city,
      });

      Alert.alert("Success", "User created successfully!");
      clear();
    } catch (error) {
      Alert.alert("Error", error as any);
    }
  };

  const updateUser = async () => {
    try {
      await update(ref(db, "users/1675212657122"), {
        username: name,
        indentityNumber: identity,
        city,
      });

      Alert.alert("Success", "User updated successfully!");
      clear();
    } catch (error) {
      Alert.alert("Error", error as any);
    }
  };

  const deleteUser = async () => {
    try {
      await remove(ref(db, "users/1675210606739"));

      Alert.alert("Success", "User deleted successfully!");
      clear();
    } catch (error) {
      Alert.alert("Error", error as any);
    }
  };

  const clear = () => {
    setIdentity("");
    setName("");
    setCity("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Form</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <CustomTextInput
            hint="Enter your identity number"
            value={identity}
            onChangeText={setIdentity}
            placeholder="ID Card Number"
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            hint="Enter your name"
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            hint="Enter your city"
            value={city}
            onChangeText={setCity}
            placeholder="City"
          />
        </View>
        <View style={{ height: 20 }} />
        <View style={styles.buttonContainer}>
          <CustomButton text="Add" onPress={addUser} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Update" onPress={updateUser} color="chartreuse" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Delete" onPress={deleteUser} color="orange" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  titleContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  inputContainer: {
    paddingVertical: 8,
  },
  form: {
    alignSelf: "center",
    width: "70%",
    paddingVertical: 16,
  },
  buttonContainer: {
    paddingVertical: 4,
  },
});
