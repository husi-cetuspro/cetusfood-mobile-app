import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import GenericScreen from "../../../common/GenericScreen"
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const baseUrl = "https://api.foodapp.academy.st.cetuspro.com/restaurants";

const RestaurantSuggestion = () => {
    const [inputOpen, setInputOpen] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            url: '',
            email: ''
        }
    });
    const onChangeNameHandler = (name) => {
        setName(name);
    };
    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };
    const onChangeUrlHandler = (url) => {
        setUrl(url);
    };


    const onSubmitFormHandler = async (event) => {
        if (!name.trim() || !email.trim() || !url.trim()) {
            alert("Name or Email is invalid");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post(`${baseUrl}`, {
                name,
                email,
                url,
            });
            if (response.status === 201) {
                alert(` You have created: ${JSON.stringify(response.data)}`);
                setIsLoading(false);
                setName('');
                setEmail('');
                setUrl('');
            } else {
                throw new Error("An error has occurred");
            }
        } catch (error) {
            alert("An error has occurred");
            setIsLoading(false);
        }
    };
    return (
        <GenericScreen inputOpen={inputOpen}>
            <View style={styles.restaurantContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nazwa restauracji</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onBlur } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChangeNameHandler}
                                value={name}
                                placeholder={'Wpisz nazwe restauracji'}
                                placeholderTextColor={'#000000'}
                                // onFocus={() => setInputOpen(true)}
                                // onEndEditing={() => setInputOpen(false)}
                                editable={!isLoading}
                            />
                        )}
                        name="nameRestaurant"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Link do strony internetowej restauracji</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onBlur } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChangeUrlHandler}
                                value={url}
                                placeholder={'Wpisz link do strony internetowej'}
                                placeholderTextColor={'#000000'}
                                // onFocus={() => setInputOpen(true)}
                                // onEndEditing={() => setInputOpen(false)}
                                editable={!isLoading}
                            />
                        )}
                        name="linkRestaurant"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Adres e-mail do przyjmowania zamówień</Text>
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
                                value={email}
                                placeholder={'Wpisz adres e-mail'}
                                placeholderTextColor={'#000000'}
                                // onFocus={() => setInputOpen(true)}
                                // onEndEditing={() => setInputOpen(false)}
                            />
                        )}
                        name="emailRestaurant"
                    />
                </View>
                <TouchableOpacity style={styles.button} disabled={isLoading} onPress={onSubmitFormHandler} >
                    <Text style={styles.buttonText}>Dodaj sugestię</Text>
                </TouchableOpacity>
            </View>
        </GenericScreen>
    )
}

const styles = StyleSheet.create({
    restaurantContainer: {
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

export default RestaurantSuggestion;