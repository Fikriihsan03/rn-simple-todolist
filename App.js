import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import InputField from "./components/InputField";
import ListField from "./components/ListField";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isInputModalVisible, setIsInputModalVisible] = useState(false);

  function todoSubmitHandler(enteredText) {
    if (enteredText === "") {
      alert("isi woy");
    } else {
      setTodoList((currentList) => [
        ...currentList,
        {
          id: Date.now(),
          todo: enteredText,
        },
      ]);
    }
  }
  function todoDeleteHandler(id) {
    setTodoList((currentList) => {
      return currentList.filter((todo) => todo.id !== id);
    });
  }
  return (
    <View style={styles.container}>
      <Button title="Add list" onPress={() => setIsInputModalVisible(true)} color="#CB1C8D" />
      <InputField
        visible={isInputModalVisible}
        closeModal={() => setIsInputModalVisible(false)}
        todoSubmitHandler={todoSubmitHandler}
      />
      <ListField list={todoList} deleteTask={todoDeleteHandler} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
    backgroundColor:"#460C68"
  },
});
