import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity  } from 'react-native';

const Form = () => {
    const [text, setText] = useState();
    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Co chciałbyś zamówić?</Text>
                <TextInput multiline={true} numberOfLines={10} placeholderTextColor={'#000000'} style={styles.textInput} placeholder='Wprowadź zamówienie' value={text} onChangeText={setText} />
            </View>
            <View  style={styles.inputContainer}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Złóż zamówienie</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
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
    }
});

export default Form;