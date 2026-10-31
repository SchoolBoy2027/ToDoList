import React, { useState, useEffect } from "react";
import { View,  FlatList, StyleSheet, Text } from "react-native";
import {Image } from "react-native";

/**
 * ToDoListProps properties
 */
type ToDoListProps = {
    onAdd?: string;
    onDelete?: (value: string) => string;
};
/**
 * ToDoList = ({
 *   onAdd,
 *   onDelete
 *  }: ToDoListProps) 
 * @param param0 
 * @returns 
 */
const ToDoList = ({
    onAdd,
    onDelete
}: ToDoListProps) => {

    const [enteredItemText, setEnteredItemText] = useState<string>('');
    const [listItems, setListItems] = useState<string[]>([]);

    /**
     * handleTitlePress if containes values, clear... otherwise load some test data 100 values total
     */
      const handleTitlePress = () => {
          if (listItems.length > 0) {
              setListItems([]);
          } else {
              const items: string[] = [];

              for (let i = 1; i <= 100; i++) {
                  let number = i;
                  let letters = "";

                  while (number > 0) {
                      number--;
                      letters = String.fromCharCode(97 + (number % 26)) + letters;
                      number = Math.floor(number / 26);
                  }

                  items.push(letters);
              }

              setListItems(items);
          }
      };

    /**
     * deleteItemHandler(index: number)
     * @param index 
     */
    function deleteItemHandler(index: number) {
      setListItems((listItems) =>
          listItems.filter((item, itemIndex) => itemIndex !== index)
      );
    }

    /**
     * addItemHandler() Rebuilt the list with a new value
     */
    function addItemHandler() {
        console.log(onAdd);

        if (onAdd && onAdd.length !== 0) {
            setListItems((listItems) => [
                ...listItems,
                onAdd
            ]);
        }

        setEnteredItemText('');
    }
    /**
     * passes Textbox value to here
     */
    useEffect(() => {
        addItemHandler();
    }, [onAdd]);

    return (
     <View style={styles.listContainer}>
      <Text style={styles.titleBar} onPress={handleTitlePress}>John's To Do List</Text>
           <FlatList
                  data={listItems}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                      <Text
                          style={styles.itemText}
                          onPress={() => deleteItemHandler(index)}
                      >
                          {item}
                      </Text>
                  )}
                  ListEmptyComponent={
                      <Image
                          source={require("../../../assets/images/OU.png")}
                          style={styles.emptyImage}
                          resizeMode="stretch"
                      />
                  }
/>
</View>
    );
};

const styles = StyleSheet.create({
    titleBar: {
        height: 40,
        borderWidth:1,
        borderColor: "#000",
        width: "100%",
        backgroundColor:"#841617",
        textAlign:"center",
        color:"white"
    },
    listContainer: {
        height: "70%",
        marginTop: 40,
        paddingTop: 5,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#000",
        width: "100%",
        backgroundColor:"#841617",
    },

    itemText: {
        color:"white",
        fontSize: 20,
        textAlign:"center",
        fontWeight: "bold",
       
    },
    emptyImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
},
});

export default ToDoList;