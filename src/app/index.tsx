import * as Device from 'expo-device';
import { Platform, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { Text } from 'react-native';
import {useState} from 'react'

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  const [text,setText]= useState('');
  return (
    <ThemedView style={styles.container}>
      <Text>Who's your daddy&nbsp</Text>
      <TextInput placeholder="Me" onChangeText={newText=>setText(newText)} style={styles.formText}>      </TextInput>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  formText: {
    width:400,
    padding:5,
    height:40,
        borderWidth: 2,
        borderColor: "blue",
        borderStyle: "solid",
        borderRadius: 10,
        fontSize:28,

    justifyContent: 'center',
  }

});
