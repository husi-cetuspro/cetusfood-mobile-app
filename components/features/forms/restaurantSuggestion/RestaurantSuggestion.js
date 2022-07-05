import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import GenericScreen from "../../../common/GenericScreen"

const RestaurantSuggestion = () => {
    const [text, setText] = useState();
    return (
        <GenericScreen>
            <View style={styles.restaurantSuggestionContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nazwa restauracji</Text>
                    <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz nazwę restauracji'} value={text} onChangeText={setText} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Link do strony internetowej restauracji</Text>
                    <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz link do strony internetowej'} value={text} onChangeText={setText} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Adres e-mail do przyjmowania zamówień</Text>
                    <TextInput placeholderTextColor={'#000000'} style={styles.textInput} placeholder={'Wpisz adres e-mail'} value={text} onChangeText={setText} />
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Dodaj sugestię</Text>
                </TouchableOpacity>
            </View>
        </GenericScreen>
    )
}

const styles = StyleSheet.create({
    restaurantSuggestionContainer: {
        paddingHorizontal: 25,
        paddingTop: 50,
    },
    label: {
        position: 'absolute',
        top: -27,
        left: 0,
        fontSize: 16,
        fontWeight: "600",
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
        fontWeight: "600",
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#086ad8',
    },
});

export default RestaurantSuggestion;