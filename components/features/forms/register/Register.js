import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../../../common/LoginScreen';

const Register = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            reduplicatePassword: ''
        }
    });
    const onSubmit = data => {
        console.log(data)
        navigation.navigate('Login');
    };
    return (
        <LoginScreen>
            <View style={styles.registerContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Imię</Text>
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
                                placeholder={'Wpisz swoje imię'}
                                placeholderTextColor={'#000000'}
                            />
                        )}
                        name="name"
                    />
                    {errors.name && <Text style={styles.errors}>Wpisano błędnie imie.</Text>}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nazwisko</Text>
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
                                placeholder={'Wpisz swoje nazwisko'}
                                placeholderTextColor={'#000000'}
                            />
                        )}
                        name="surname"
                    />
                    {errors.surname && <Text style={styles.errors}>Wpisano błędnie nazwisko.</Text>}
                </View>
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
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Wpisz swój adres e-mail'}
                                placeholderTextColor={'#000000'}
                            />
                        )}
                        name="email"
                    />
                    {errors.email && <Text style={styles.errors}>Wpisano błędny e-mail.</Text>}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Numer telefonu</Text>
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
                                placeholder={'Wpisz swój numer telefonu'}
                                placeholderTextColor={'#000000'}
                            />
                        )}
                        name="phone"
                    />
                    {errors.phone && <Text style={styles.errors}>Wpisano błędny enumer telefonu.</Text>}
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
                                onChangeText={onChange}
                                value={value}
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
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Wpisz hasło'}
                                placeholderTextColor={'#000000'}
                                secureTextEntry={true}
                            />
                        )}
                        name="reduplicatePassword"
                    />
                    {errors.phone && <Text style={styles.errors}>Wpisano błędny enumer telefonu.</Text>}
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>Zarejestruj się</Text>
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