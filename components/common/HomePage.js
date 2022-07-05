import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../features/forms/Form';
import User from '../features/user/User';
import GenericScreen from './GenericScreen';

export default function HomePage() {
  return (
    <GenericScreen>
      <View style={styles.container}>
        <Form selectListLabel={'Nazwa restauracji'} textAreaLabel={'Co chciałbyś zamówić?'} textAreaPlaceholder={'Wprowadź zamówienie'} buttonSend={'Złóż zamówienie'} />
        {/* <User /> */}
      </View>
    </GenericScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});
