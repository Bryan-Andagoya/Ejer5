import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props {
  value: TextInputProps["value"];
  onChangeText: TextInputProps["onChangeText"];
  placeholder: TextInputProps["placeholder"];
  hint: string;
}

export const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  hint,
}: Props) => {
  return (
    <>
      <View style={styles.hintContainer}>
        <Text>{hint}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: "100%",
  },
  hintContainer: {
    paddingBottom: 4,
  },
});
