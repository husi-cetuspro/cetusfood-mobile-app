
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import HomePage from './components/common/HomePage';
import LoginPage from './components/features/forms/LoginPage';
import RestaurantSuggestion from './components/features/forms/restaurantSuggestion/RestaurantSuggestion';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPassword from './components/features/forms/forgetPassword/ForgetPassword';
import NewPassword from './components/features/forms/forgetPassword/NewPassword';
import Register from './components/features/forms/register/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
        </Stack.Navigator>
        {/* <Header/> */}
        {/* <HomePage/> */}
        {/* <RestaurantSuggestion/> */}
        {/* <Footer />  */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});
