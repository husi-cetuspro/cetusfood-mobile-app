import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../../../common/LoginScreen';
import { api } from "../../../../api/Api";
import { useAuthContext } from '../../../../providers/AuthContextProvider';
import Alert from '../../../Alert';

const Login = () => {
    const { setToken } = useAuthContext();
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: 'test@gmail.com',
            password: 'zaq1@WSX'
        }
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitFormHandler = ({ email, password }) => {
        setIsLoading(true);

        api.post(`/auth/signIn`, {
            email,
            password,
        }).then(response => {
            if (response.status === 200) {
                setToken(response.data);
            } else {
                throw new Error("Wystąpił błąd");
            }
        }).catch(error => {
            setModalVisible(true);
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
                {isLoading ? <ActivityIndicator /> : <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={handleSubmit(onSubmitFormHandler)}>Zaloguj się</Text>
                </TouchableOpacity>}
                <View style={styles.informationContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textInformation}>Utwórz konto</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text style={styles.textInformation}>Zapomniałem hasła</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            <Alert
                modalVisible={modalVisible}
                closeAlert={() => setModalVisible(!modalVisible)}
                text={'Podano zły email lub hasło.'}
                closeButton={'Zamknij'}
            />
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
    button: {
        borderRadius: 5,
        backgroundColor: '#086ad8',
    },
    buttonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        paddingVertical: 15,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: "600",
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
    alertContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0, 0.5)",
    },
    alertTextContainer: {
        width: "75%",
        height: 200,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderRadius: 5,
        paddingVertical: 50,
    },
    alertButtonText: {
        textTransform: "none",
        fontSize: 15,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: "500",
    },
    alertButtonContainer: {
        borderRadius: 5,
        backgroundColor: '#086ad8',
        paddingHorizontal: 30,
        marginTop: 20,
    },
});

export default Login;