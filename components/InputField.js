import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const InputField = ({todoText,setTodoText,submitHandler}) => {
    return ( 
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.todoInput}
          onChangeText={setTodoText}
          value={todoText}
          placeholder="Text input"
        />
        <Button title="Submit" onPress={submitHandler} />
      </View>
     );
}
 
export default InputField;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
        borderBottomWidth: 2,
        borderColor: "#cccccc",
      },
      todoInput: {
        width: "80%",
        padding: 8,
        borderWidth: 1,
        borderColor: "#cccccc",
        marginRight: 8,
      },
})