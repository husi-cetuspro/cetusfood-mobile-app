import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';

const Form = (props) => {
    const [text, setText] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{props.textAreaLabel}</Text>
                <TextInput multiline={true} numberOfLines={10} placeholderTextColor={'#000000'} style={styles.textInput} placeholder={props.textAreaPlaceholder} value={text} onChangeText={setText} />
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.button} >
                    <Text onPress={() => setModalVisible(true)} style={styles.buttonText}>{props.buttonSend}</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.popup}>
                <View style={styles.popupContainer}>
                    <Text style={styles.popupText}>Twoje zamówienie zostało złożone i zostanie dostarczone około godziny 13:00</Text>
                    <View style={styles.popupButtonContainer}>
                        <Text style={[styles.popupCloseButton, styles.popupButton]} onPress={() => setModalVisible(!modalVisible)}>Zakończ</Text>
                        <Text style={[styles.popupToUserButton, styles.popupButton]} >Historia zamówień</Text>
                    </View>
                </View>
                </View>
            </Modal>
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
    },
    popup:{
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    popupContainer: {
        borderRadius: 5,
        backgroundColor: '#ffffff',
        borderColor: '#086ad8',
        borderWidth: 3,
        paddingHorizontal: 30,
        paddingVertical: 35,
    },
    popupText: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        paddingBottom: 20,
    },
    popupButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    popupButton: {
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: 500,
    },
    popupCloseButton: {
        backgroundColor: '#086ad8',
        color: '#ffffff',
    },
    popupToUserButton: {
        borderWidth: 2,
        color: '#086ad8',
        borderColor: '#086ad8',
    },
});

export default Form;