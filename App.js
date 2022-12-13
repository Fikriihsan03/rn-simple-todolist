import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import InputField from "./components/InputField";
import ListField from "./components/ListField";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function todoSubmitHandler() {
    if (todoText === "") {
      alert("isi woy");
    } else {
      setTodoList((currentList) => [
        ...currentList,
        {
          key: Date.now(),
          todo: todoText,
        },
      ]);
      setTodoText("");
    }
  }

  return (
    <View style={styles.container}>
      <InputField todoText={todoText} setTodoText={setTodoText} submitHandler={todoSubmitHandler} />
      <ListField list={todoList} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
  },

});
