import { Pressable, FlatList, StyleSheet, View, Text } from "react-native";

const ListField = ({ list, deleteTask }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => {
          return (
            <Pressable android_ripple={{color:"#dddddd"}} onPress={deleteTask.bind(this,item.id)} style={(props)=>console.log(props)} >
              <View style={styles.listItem}>
                <Text style={styles.itemText}>{item.todo}</Text>
              </View>
            </Pressable>
          );
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item,index)=>item.id}
      />
    </View>
  );
};

export default ListField;

const styles = StyleSheet.create({
  listContainer: {
    marginTop:25,
  },
  listItem: {
    backgroundColor: "#7F167F",
    borderRadius: 10,
    margin:8,
  },
  itemText: {
    padding: 8,
    color: "white",
  },
});
