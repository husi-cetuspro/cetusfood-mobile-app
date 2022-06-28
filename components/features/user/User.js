import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const User = () => {
    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Co chciałbyś zamówić?</Text>
                <TextInput theme={{colors: {primary: 'green', underlineColor: 'transparent'}}} onBlur={() => setBackgroundColor('yellow')} onFocus={() => setFocus(true)} placeholderTextColor={'#000000'} style={styles.textInput} placeholder='Wprowadź zamówienie' value={text} onChangeText={setText} />
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
        top: '-20px',
        left: 5,
    },
    inputContainer: {
        position: 'relative',
    },
    textInput: {
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
});

export default User;