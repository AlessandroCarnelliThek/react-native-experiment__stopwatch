import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>::::STOPWATCH::::</Text>
      <Text style={styles.text}>::::00:00:000::::</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154360',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ddd',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
