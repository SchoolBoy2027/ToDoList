import { Image, Pressable, StyleSheet, View } from 'react-native';

import Textbox from '../components/ui/Textbox';
import ToDoList from '../components/ui/ToDoList';

import { useState } from 'react';

/**
 * 
 * @returns 
 */
export default function HomeScreen() {

  const [myNewItem, setNewItem] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Image
          source={require("../../assets/images/Stoops.png")}
          style={styles.champImage}
          resizeMode="stretch"
        />
      </Pressable>

      <ToDoList onAdd={myNewItem}  >
      </ToDoList>

      <Textbox
        labelText={'Add To Do'}
        placeholderText={'Whatcha Doing?'}
        onChange={setNewItem}
        onClose={() => setModalVisible(false)}
        visible={modalVisible}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  myTitle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addButton: {
    marginTop: 5,
    flex: 1,
    width: "100%",
    maxHeight: 80,
    backgroundColor: "#841617",
    padding: 1,
    borderRadius: 1,
    alignItems: "center",
    flexDirection: 'row',
  },

  addButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  champImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 50,
  },

});
