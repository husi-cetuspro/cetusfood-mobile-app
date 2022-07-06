import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericScreen from '../../common/GenericScreen';
import { useNavigation } from '@react-navigation/native';

const User = () => {
    const navigation = useNavigation();
    return (
        <GenericScreen>
            <View style={styles.userContainer}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantSuggestion')}>
                        <Text style={styles.userText}>Dodaj propozycję restauracji</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('HistoryOrder')}>
                        <Text style={styles.userText}>Historia zamówień</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    }
});

export default User;