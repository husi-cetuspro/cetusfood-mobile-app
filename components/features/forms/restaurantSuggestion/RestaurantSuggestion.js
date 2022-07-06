import React, {useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import GenericScreen from "../../../common/GenericScreen"
import { useForm, Controller } from "react-hook-form";

const RestaurantSuggestion = () => {
    const [inputOpen, setInputOpen] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nameRestaurant: '',
            linkRestaurant: '',
            emailRestaurant: ''
        }
    });
    const onSubmit = data => {
        console.log(data)
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
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Wpisz nazwe restauracji'}
                                placeholderTextColor={'#000000'}
                                onFocus={() => setInputOpen(true)}
                                onEndEditing={() => setInputOpen(false)}
                            />
                        )}
                        name="nameRestaurant"
                    />
                    {errors.nameRestaurant && <Text style={styles.errors}>Wypełnij to pole.</Text>}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Link do strony internetowej restauracji</Text>
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
                                placeholder={'Wpisz link do strony internetowej'}
                                placeholderTextColor={'#000000'}
                                onFocus={() => setInputOpen(true)}
                                onEndEditing={() => setInputOpen(false)}
                            />
                        )}
                        name="linkRestaurant"
                    />
                    {errors.linkRestaurant && <Text style={styles.errors}>Wypełnij to pole.</Text>}
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
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Wpisz adres e-mail'}
                                placeholderTextColor={'#000000'}
                                onFocus={() => setInputOpen(true)}
                                onEndEditing={() => setInputOpen(false)}
                            />
                        )}
                        name="emailRestaurant"
                    />
                    {errors.emailRestaurant && <Text style={styles.errors}>Wypełnij to pole.</Text>}
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>Dodaj sugestię</Text>
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