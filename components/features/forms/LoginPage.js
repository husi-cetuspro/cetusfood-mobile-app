import React from 'react';
import { StyleSheet, View, Text, Image  } from 'react-native';
import Login from './login/Login';
import ForgetPassword from './forgetPassword/ForgetPassword';

const LoginPage = () => {
    return (
        <View style={styles.loginPageContainer}>
            <Image style={styles.logo} source={require('../../../assets/logoLoginPage.png')} />
            <Login/>
            {/* <ForgetPassword /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        minHeight: 135,
        width: 170,
        marginHorizontal: 'auto',
        marginTop: 20,
    }
});

export default LoginPage;