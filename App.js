
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './components/features/forms/login/Login';
import RestaurantSuggestion from './components/features/forms/restaurantSuggestion/RestaurantSuggestion';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPassword from './components/features/forms/forgetPassword/ForgetPassword';
import NewPassword from './components/features/forms/forgetPassword/NewPassword';
import Register from './components/features/forms/register/Register';
import Form from './components/features/forms/Form';
import User from './components/features/user/User';
import HistoryOrder from './components/features/historyOrder/HistoryOrder';
import SingleOrder from './components/features/historyOrder/detailsOrder/SingleOrder';
import { AuthProvider } from './providers/AuthContextProvider';
import { useAuthContext } from './providers/AuthContextProvider';

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppNavigator = () => <AppStack.Navigator initialRouteName="Form" screenOptions={{ headerShown: false }}>
  <AppStack.Screen name="Form" component={Form} />
  <AppStack.Screen name="User" component={User} />
  <AppStack.Screen name="RestaurantSuggestion" component={RestaurantSuggestion} />
  <AppStack.Screen name="HistoryOrder" component={HistoryOrder} />
  <AppStack.Screen name="SingleOrder" component={SingleOrder} />
</AppStack.Navigator>

const AuthNavigator = () => <AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
  <AuthStack.Screen name="Login" component={Login} />
  <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
  <AuthStack.Screen name="Register" component={Register} />
  <AuthStack.Screen name="NewPassword" component={NewPassword} />
</AuthStack.Navigator>

const AuthControll = () => {
  const { token } = useAuthContext();
  return (
    token ? <AppNavigator /> : <AuthNavigator />

  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <NavigationContainer>
          <AuthControll />
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});
