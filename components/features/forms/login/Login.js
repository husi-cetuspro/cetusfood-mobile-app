import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
    const [text, setText] = useState();
    return (
        <View style={styles.loginContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz swój adres e-mail'} value={text} onChangeText={setText} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Hasło</Text>
                <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz swoje hasło'} value={text} onChangeText={setText} />
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Zaloguj się</Text>
            </TouchableOpacity>
            <View style={styles.informationContainer}>
                <Text style={styles.textInformation}>Utwórz konto</Text>
                <Text style={styles.textInformation}>Zapomniałem hasła</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        paddingHorizontal: 25,
        paddingTop: 50,
    },
    label: {
        position: 'absolute',
        top: '-27px',
        left: 0,
        fontSize: 16,
        fontWeight: 600,
    },
    inputContainer: {
        position: 'relative',
        paddingBottom: 20,
        marginTop: 25,
    },
    textInput: {
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        paddingVertical: 15,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 600,
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#086ad8',
    },
    informationContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    textInformation:{
        paddingLeft: 30,
        paddingTop: 20,
    }
});

export default Login;