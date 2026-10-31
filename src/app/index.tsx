import * as Device from 'expo-device';
import {View, Text, StyleSheet} from 'react-native';

import  Textbox from '../components/ui/Textbox';
import  ToDoList from '../components/ui/ToDoList';

import {useState} from 'react'



/**
 * 
 * @returns 
 */
export default function HomeScreen() {

  const [myNewItem, setNewItem] = useState<string>("");


  return (
    <View style={styles.container}>

      <ToDoList onAdd={myNewItem}  >

      </ToDoList>



      <Textbox labelText={'Add Item'} placeholderText={'Item Description'}  onChange={setNewItem}>
      </Textbox>
      
      {myNewItem !== "" && (
          <Text style={styles.myTitle}>{myNewItem}</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
 myTitle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
 

});
