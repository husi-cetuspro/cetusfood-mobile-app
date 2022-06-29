import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const ForgetPassword = () => {
    const [text, setText] = useState();
    return (
        <View style={styles.forgetPasswordContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz swój adres e-mail'} value={text} onChangeText={setText} />
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Dalej</Text>
            </TouchableOpacity>
            {/* <View style={styles.inputContainer}>
                <Text style={styles.label}>Nowe hasło</Text>
                <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz nowe hasło'} value={text} onChangeText={setText} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Powtórz nowe hasło</Text>
                <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz nowe hasło'} value={text} onChangeText={setText} />
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Ustaw hasło</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    forgetPasswordContainer: {
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
});

export default ForgetPassword;