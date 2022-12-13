import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

const InputField = ({ visible, closeModal, todoSubmitHandler }) => {
  const [todoText, setTodoText] = useState("");

  function submitHandler() {
    todoSubmitHandler(todoText);
    setTodoText("");
    closeModal();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.goalImage}
          source={require("../assets/goal.png")}
        />
        <TextInput
          style={styles.todoInput}
          onChangeText={setTodoText}
          value={todoText}
          placeholder="Text input"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Submit" onPress={submitHandler} color="#CB1C8D" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#F56EB3"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#cccccc",
    backgroundColor: "#460C68",
    padding: 10,
  },
  todoInput: {
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor:"#e3d0ff",
    color:"#460C68"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "45%",
    marginHorizontal: 18,
  },
  goalImage: {
    width: 100,
    height: 100,
    margin:20
  },
});
