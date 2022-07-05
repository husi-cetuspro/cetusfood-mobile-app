import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const onSubmit = data => {
        console.log(data)
        navigation.navigate('Form');
    };

    return (
        <View style={styles.loginContainer}>
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
                    name="username"
                />
                {errors.username && <Text style={styles.errors}>Wpisano błędny e-mail.</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Hasło</Text>
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
                            placeholder={'Wpisz swoje hasło'}
                            placeholderTextColor={'#000000'}
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text style={styles.errors}>Wpisano błędne hasło.</Text>}
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>Zaloguj się</Text>
            </TouchableOpacity>
            <View style={styles.informationContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textInformation}>Utwórz konto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text style={styles.textInformation}>Zapomniałem hasła</Text>
                </TouchableOpacity>
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
    informationContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 30,
    },
    textInformation: {
        paddingLeft: 30,
        paddingTop: 20,
    },
    errors: {
        marginTop: 5,
    },
});

export default Login;