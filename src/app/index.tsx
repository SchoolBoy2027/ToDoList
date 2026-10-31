import * as Device from 'expo-device';
import { Text,Platform, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
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
    <ThemedView style={styles.container}>

      <ToDoList onAdd={myNewItem}  >

      </ToDoList>



      <Textbox labelText={'Add Item'} placeholderText={'Item Description'}  onChange={setNewItem}>
      </Textbox>
      
      {myNewItem !== "" && (
          <Text style={styles.myTitle}>{myNewItem}</Text>
      )}

    </ThemedView>
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
