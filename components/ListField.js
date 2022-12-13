import { FlatList, StyleSheet, View, Text } from "react-native";

const ListField = ({ list }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listItem}>
              <Text style={styles.itemText}>{item.todo}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListField;

const styles = StyleSheet.create({
  listContainer: {
    flex: 5,
  },
  listItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "#4B56D2",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#472183",
  },
  itemText: {
    color: "white",
  },
});
