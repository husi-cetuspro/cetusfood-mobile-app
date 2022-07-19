import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import GenericScreen from '../../common/GenericScreen';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../../providers/AuthContextProvider';

const User = () => {
    const navigation = useNavigation();
    const { setToken } = useAuthContext();


    return (
        <GenericScreen>
            <View style={styles.userContainer}>
                <View>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('RestaurantSuggestion')}>
                        <Text style={styles.userText}>Dodaj propozycję restauracji</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('HistoryOrder')}>
                        <Text style={styles.userText}>Historia zamówień</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => setToken('')}>
                        <Text style={styles.userText}>Wyloguj się</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </GenericScreen>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        borderTopWidth: 2.5,
        borderColor: '#086ad8',
        marginTop: 30,
    },
    userText: {
        borderColor: '#086ad8',
        paddingVertical: 20,
        borderBottomWidth: 2.5,
        fontSize: 16,
        fontWeight: '500',
        color: '#444',
        paddingLeft: 10,

    },
    textContainer: {
        ...Platform.select({
            ios: {
                borderBottomWidth: 2.5,
                borderColor: '#086ad8',
            }
        })
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

export default User;