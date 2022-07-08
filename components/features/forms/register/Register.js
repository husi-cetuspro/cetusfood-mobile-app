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
            confirmPassword: '',
        }
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRODOAllowed, setIsRODOAllowed] = useState(false);
    const [isMailingAllowed, setIsMailingAllowed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitFormHandler = async (event) => {
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert("Name or Email is invalid");
            return;
        }
        setIsLoading(true);
        try {
            const response = await api.post(`https://api.mobicarclub.st.cetuspro.com/v1/auth/register-user`, {
                email,
                password,
                confirmPassword,
                isRODOAllowed,
                isMailingAllowed: true,
            });
            if (response.status === 201) {
                alert(` You have created: ${JSON.stringify(response.data)}`);
                setIsLoading(false);
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setIsRODOAllowed(false);
                setIsMailingAllowed(true);
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
    const onChangeConfirmPasswordHandler = (confirmPassword) => {
        setConfirmPassword(confirmPassword);
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
                                onChangeText={onChangeConfirmPasswordHandler}
                                editable={!isLoading}
                                value={confirmPassword}
                                placeholder={'Wpisz hasło'}
                                placeholderTextColor={'#000000'}
                                secureTextEntry={true}
                            />
                        )}
                        name="confirmPassword"
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.singleChecboxContainer}>
                        <Checkbox
                            status={isRODOAllowed ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsRODOAllowed(!isRODOAllowed);
                            }}
                            color={'#086ad8'}
                            uncheckColor={'red'}
                        />
                        <Text>isRODOAllowed</Text>
                    </View>
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
    checkboxContainer:{
        paddingBottom: 20,
    },
    singleChecboxContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Register;