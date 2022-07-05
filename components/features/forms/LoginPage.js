import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Login from './login/Login';
import ForgetPassword from './forgetPassword/ForgetPassword';

const LoginPage = () => {
    return (
        <View style={styles.loginPageContainer}>
            <Image style={styles.logo} source={require('../../../assets/logoLoginPage.png')} resizeMode='contain' />
            <Login />
        </View>
    )
}

const styles = StyleSheet.create({
    loginPageContainer: {
        width: '80%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: undefined,
        aspectRatio: 1 / 1,
        width: '100%',
        marginHorizontal: 'auto',
        marginTop: 20,
    }
});

export default LoginPage;