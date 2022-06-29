import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../features/forms/Form';
import User from '../features/user/User';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Form textAreaLabel={'Co chciałbyś zamówić?'} textAreaPlaceholder={'Wprowadź zamówienie'} buttonSend={'Złóż zamówienie'} />
      {/* <User /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});
