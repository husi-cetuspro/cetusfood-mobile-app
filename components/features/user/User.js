import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericScreen from '../../common/GenericScreen';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../../../providers/AuthContextProvider';

const User = () => {
    const navigation = useNavigation();
    const {setToken} = useAuthContext();
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
    textContainer:{
        ...Platform.select({
            ios:{
                borderBottomWidth: 2.5,
                borderColor: '#086ad8',
            }
        })
    }
});

export default User;