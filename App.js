import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Footer from './components/common/Footer'
import Form from './components/features/forms/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
      <Footer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});
