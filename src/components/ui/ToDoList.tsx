import React, { useState, useEffect } from "react";
import { View, ScrollView, FlatList, StyleSheet, Text } from "react-native";
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
     * itemInputHandler(enteredText:string)
     * @param enteredText
     */
    function itemInputHandler(enteredText: string) {
        setEnteredItemText(enteredText);
    }

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
     * addItemHandler()
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

    useEffect(() => {
        addItemHandler();
    }, [onAdd]);

    return (
     <View style={styles.listContainer}>
      <Text style={styles.titleBar} onPress={() => setListItems([])}>John's To Do List</Text>
        <ScrollView>
            {listItems.length === 0 ? (
                <Image
                    source={require("../../../assets/images/OU.png")}
                    style={styles.emptyImage}
                    resizeMode="stretch"
                />
            ) : (
                listItems.map((item, index) => (
                    <Text
                        key={index}
                        style={styles.itemText}
                        onPress={() => deleteItemHandler(index)}
                    >
                        {item}
                    </Text>
                ))
            )}
        </ScrollView>
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
        color:"255, 255, 254",
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