import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const handleButtonPress = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: Platform.OS === 'ios' ? 'openDocument' : 'application/*',
        // type: 'application/*',
        copyToCacheDirectory: false,
        multiple: false,
        // type: Platform.OS === 'ios' ? 'application/*' : 'application/.ics',
      });

      if (result.type === 'success') {
        // Check if the selected file has the .ics extension
        if (result.name && result.name.endsWith('.ics')) {
          // Handle the selected .ics file (e.g., display file name or process it further)
          console.log(`Selected file: ${result.name}`);
        } else {
          // File is not of type .ics, show an error or message
          console.log('Please select a file with .ics extension.');
        }
      } else {
        // Document picker was cancelled or failed
        console.log('Document picking cancelled or failed.');
      }
    } catch (error) {
      // Handle any errors that occurred during document picking
      console.error(`Error picking document: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>No Skip!</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Choose .ics File</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#57d',
    fontSize: 16,
  },
});