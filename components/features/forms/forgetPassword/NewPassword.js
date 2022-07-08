import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../../../common/LoginScreen';

const ForgetPassword = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            newPassword: '',
            reduplicatePassword: ''
        }
    });
    const onSubmit = data => {
        console.log(data)
        navigation.navigate('Login');
    };
    return (
        <LoginScreen>
            <View style={styles.forgetPasswordContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nowe hasło</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor={'#000000'}
                                placeholder={'Wpisz nowe hasło'}
                                secureTextEntry={true}
                            />
                        )}
                        name="newPassword"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Powtórz nowe hasło</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor={'#000000'}
                                placeholder={'Wpisz nowe hasło'}
                                secureTextEntry={true}
                            />
                        )}
                        name="reduplicatePassword"
                    />
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>Ustaw hasło</Text>
                </TouchableOpacity>
            </View>
        </LoginScreen>
    )
}

const styles = StyleSheet.create({
    forgetPasswordContainer: {
        paddingHorizontal: 25,
        paddingTop: 30,
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
        ...Platform.select({
            ios:{
                paddingVertical: 15,
                fontSize: 16,
            }
        })
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

export default ForgetPassword;