import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import GenericScreen from '../../common/GenericScreen';
import { useForm, Controller } from "react-hook-form";
import { api } from '../../../api/Api';
import { useAuthContext } from '../../../providers/AuthContextProvider';
import Alert from '../../Alert';

const Form = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: '',
            restaurantId: '',
            content: ''
        }
    });
    const {token} = useAuthContext();
    useEffect(() => {
        async function doGetRequest() {
            try {
            api.defaults.headers["Authorization"] = `Bearer ${token}`
            let res = await api.get(`/user/restaurants`);
            let data = res.data;
            let rest = [];
            data.forEach(element => {
                rest.push({ restaurantId: element.id, name: element.name })
            });
            setRestaurants(rest);
        } catch (error) {
            console.log(JSON.stringify(error))
        }
        }
        doGetRequest();
    }, []);

    const [restaurantId, setRestaurantId] = useState([]);
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitFormHandler = async (event) => {
        if (!content.trim()) {
            alert("Wprowadź poprawne dane");
            return;
        }
        setIsLoading(true);
        try {
            const response = await api.post(`/user/orders`, {
                restaurantId,
                content,
            });
            if (response.status === 200) {
                setModalVisible(true);
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
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Wprowadź zamówienie</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onBlur, value} }) => (
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
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.button} disabled={isLoading} onPress={handleSubmit(onSubmitFormHandler)}>
                        <Text style={styles.buttonText}>Złóż zamówienie</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Alert
                modalVisible={modalVisible}
                closeAlert={() => setModalVisible(!modalVisible)}
                text={'Zamówienie zostało złożone.'}
                closeButton={'Zamknij'}
            />
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