import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import GenericScreen from '../../common/GenericScreen';
import { useForm, Controller } from "react-hook-form";
import { api } from '../../../api/Api';
import { useAuthContext } from '../../../providers/AuthContextProvider';
import { FontAwesome } from '@expo/vector-icons';

const Form = () => {
    const [restaurants, setRestaurants] = useState([]);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: '',
            restaurantId: '',
            content: ''
        }
    });
    useEffect(() => {
        async function doGetRequest() {
            let res = await api.get(`/restaurants`);
            let data = res.data;
            let rest = [];
            data.forEach(element => {
                rest.push({ restaurantId: element.id, name: element.name })
            });
            setRestaurants(rest);
        }
        doGetRequest();
    }, []);

    const [restaurantId, setRestaurantId] = useState([]);
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitFormHandler = async (event) => {
        if (!content.trim()) {
            alert("Wprowadź poprawne dane");
            return;
        }
        setIsLoading(true);
        try {
            const response = await api.post(`/orders`, {
                restaurantId,
                content,
            });
            if (response.status === 201) {
                alert(` Stworzono zamówienie o numerze: ${JSON.stringify(response.data)}`);
                setIsLoading(false);
                setRestaurantId('');
                setContent('');
            } else {
                throw new Error("Wystąpił błąd");
            }
        } catch (error) {
            alert(error.message);
            setIsLoading(false);
        }
    };
    const onChangeRestaurantIdHandler = (restaurantId) => {
        setRestaurantId(restaurantId);
    };
    





    // const [inputList, setInputList] = useState([
    //     {
    //         input: "",
    //         input_rank: null
    //     }
    // ])

    // const [isDisabled, setIsDisabled] = useState(false)

    // useEffect(() => {
    //     if (inputList.length > 0) {
    //         inputList[inputList.length - 1].input === ""
    //             ? setIsDisabled(true)
    //             : setIsDisabled(false)
    //     }
    // })

    // const handleListAdd = () => {
    //     setInputList([
    //         ...inputList,
    //         {
    //             input: "",
    //             input_rank: null
    //         }
    //     ])
    // }
    // const handleInputChange = (event, index) => {
    //     const { value } = event.target.value
    //     const newInputList = [...inputList]
    //     newInputList[index].input = value
    //     newInputList[index].input_rank = index + 1
    //     setInputList(newInputList)
    // }

    // const handleRemoveItem = (index) => {
    //     const newList = [...inputList]
    //     newList.splice(index, 1)
    //     setInputList(newList)
    // }

    const onChangeContentHandler = (content) => {
        setContent(content);
    };


    return (
        <GenericScreen>
            <View style={styles.formContainer}>
                <View style={styles.selectList}>
                    <Text style={styles.label}>Nazwa restauracji</Text>
                    <SelectDropdown
                        data={restaurants}
                        defaultButtonText={'Wybierz opcje'}
                        buttonStyle={{ width: '100%', justifyContent: 'flex-end', borderWidth: 2, borderRadius: 5, paddingVertical: 10, paddingHorizontal: 10 }}
                        dropdownStyle={{ backgroundColor: '#fff', paddingHorizontal: 10, borderRadius: 5, paddingBottom: 10 }}
                        rowStyle={{ paddingVertical: 10, borderBottomWidth: 2 }}
                        editable={!isLoading}
                        value={restaurantId}
                        onSelect={(selectedItem, index) => {
                            onChangeRestaurantIdHandler(selectedItem.restaurantId)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.name
                        }}
                        rowTextForSelection={(item, index) => {
                            return item.name
                        }}
                    />
                </View>
                {/* {inputList.length > 0
                    ? inputList.map((input, index) => (
                        <View key={index} style={styles.inputContainer}>
                            <Text style={styles.label}>{index + 1}. Wprowadź zamówienie</Text>
                            <View style={styles.addInputContainer}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: {  onBlur, onChange } }) => (
                                        <TextInput
                                            onBlur={onBlur}
                                            onChangeText={(event) => handleInputChange(event, index)}
                                            value={input}
                                            placeholderTextColor={'#000000'}
                                            style={[styles.textInput, styles.addInput]}
                                            editable={!isLoading}
                                            placeholder={'Wprowadź zamówienie'} />
                                    )}
                                    name={`content${index + 1}`}
                                />
                                <TouchableOpacity style={styles.removeButtonContainer} onPress={() => handleRemoveItem(index)}>
                                    <FontAwesome style={styles.removeButtonText} name="remove" size={15} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                    : " "} */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Wprowadź zamówienie</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { value, onBlur, onChange } }) => (
                            <TextInput
                                textAlignVertical={'top'}
                                onBlur={onBlur}
                                onChangeText={onChangeContentHandler}
                                value={content}
                                multiline={true}
                                numberOfLines={10}
                                placeholderTextColor={'#000000'}
                                style={[styles.textInput, styles.textArea]}
                                editable={!isLoading}
                                placeholder={'Wprowadź zamówienie'} />
                        )}
                        name="content"
                    />
                </View>

                {/* <TouchableOpacity style={[styles.button, { marginBottom: 20 }]} onPress={handleListAdd}>
                    <Text style={styles.buttonText}>Dodaj kolejne danie +</Text>
                </TouchableOpacity> */}
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.button} disabled={isLoading} onPress={onSubmitFormHandler}>
                        <Text style={styles.buttonText}>Złóż zamówienie</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </GenericScreen>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        paddingTop: 20,
    },
    textArea: {
        ...Platform.select({
            ios: {
                minHeight: 190,
                paddingTop: 10,
                fontSize: 16,
            }
        })
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "600",
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
        fontWeight: "600",
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#086ad8',
    },
    selectList: {
        marginBottom: 20,
    },
    removeButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 25,
        height: 40,
        width: 40,
        marginLeft: 10,
    },
    addInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addInput: {
        width: '85%',
    }
});

export default Form;