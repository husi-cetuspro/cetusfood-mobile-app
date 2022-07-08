import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../../../common/LoginScreen';
import {api} from "../../../../api/Api";
import { useAuthContext } from '../../../../providers/AuthContextProvider';

const Login = () => {
    const {setToken} = useAuthContext();
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: 'kopfszmercen@gmail.com', 
            password: 'qwerty'
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmitFormHandler = ({ email, password }) => {
        setIsLoading(true);

        api.post(`https://api.mobicarclub.st.cetuspro.com/v1/auth/sign-in`, {
            email,
            password,
        }).then(response => {
                if (response.status === 200) {
                    setToken(response.data.accessToken);
                } else {
                    throw new Error("An error has occurred");
                }
            }).catch(error => {
                alert(error?.message);
            }).finally(() => setIsLoading(false))
    };

    return (
        <LoginScreen>
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
                        name="email"
                    />
                    {errors.email && <Text style={styles.errors}>Wpisano błędny e-mail.</Text>}
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
                                secureTextEntry={true}
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <Text style={styles.errors}>Wpisano błędne hasło.</Text>}
                </View>
                {isLoading? <ActivityIndicator /> : <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={handleSubmit(onSubmitFormHandler)}>Zaloguj się</Text>
                </TouchableOpacity>}
                <View style={styles.informationContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textInformation}>Utwórz konto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text style={styles.textInformation}>Zapomniałem hasła</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LoginScreen>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
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