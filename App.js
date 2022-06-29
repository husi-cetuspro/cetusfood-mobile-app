
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import HomePage from './components/common/HomePage';
import LoginPage from './components/features/forms/LoginPage';
import RestaurantSuggestion from './components/features/forms/restaurantSuggestion/RestaurantSuggestion';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginPage/> */}
      <Header/>
      <HomePage/>
      {/* <RestaurantSuggestion/> */}
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
