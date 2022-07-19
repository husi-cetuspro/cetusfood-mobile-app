import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../../../common/LoginScreen';
import { api } from "../../../../api/Api";
import { useAuthContext } from '../../../../providers/AuthContextProvider';
import { Checkbox } from 'react-native-paper';

const Register = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmationPassword: '',
        }
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitFormHandler = async (event) => {
        if (!email.trim() || !password.trim() || !confirmationPassword.trim()) {
            alert("Name or Email is invalid");
            return;
        }
        setIsLoading(true);
        try {
            const response = await api.post(`/public/account/register`, {
                email,
                password,
                confirmationPassword,
            });
            if (response.status === 201) {
                alert(` You have created: ${JSON.stringify(response.data)}`);
                setIsLoading(false);
                setEmail('');
                setPassword('');
                setConfirmationPassword('');
                navigation.navigate('Login');
            } else {
                throw new Error("Wystąpił błąd");
            }
        } catch (error) {
            alert("Podano złe informacje");
            setIsLoading(false);
        }
    };
    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };
    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };
    const onChangeconfirmationPasswordHandler = (confirmationPassword) => {
        setConfirmationPassword(confirmationPassword);
    };
    return (
        <LoginScreen>
            <View style={styles.registerContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChangeEmailHandler}
                                editable={!isLoading}
                                value={email}
                                placeholder={'Wpisz swój adres e-mail'}
                                placeholderTextColor={'#000000'}
                            />
                        )}
                        name="email"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Wpisz hasło</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChangePasswordHandler}
                                editable={!isLoading}
                                value={password}
                                placeholder={'Wpisz hasło'}
                                placeholderTextColor={'#000000'}
                                secureTextEntry={true}
                            />
                        )}
                        name="password"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Powtórz hasło</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChangeconfirmationPasswordHandler}
                                editable={!isLoading}
                                value={confirmationPassword}
                                placeholder={'Wpisz hasło'}
                                placeholderTextColor={'#000000'}
                                secureTextEntry={true}
                            />
                        )}
                        name="confirmationPassword"
                    />
                </View>
                <TouchableOpacity style={styles.button} disabled={isLoading} onPress={onSubmitFormHandler}>
                    <Text style={styles.buttonText}>Zarejestruj się</Text>
                </TouchableOpacity>
            </View>
        </LoginScreen>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
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
            ios: {
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

export default Register;