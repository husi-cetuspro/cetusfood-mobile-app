import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const User = () => {
    return (
        <View style={styles.userContainer}>
            <View style={styles.userContent}>
                <Text style={styles.userText}>Dodaj propozycję restauracji</Text>
                <Text style={styles.userText}>Historia zamówień</Text>
                <Text style={styles.userText}>Wyloguj się</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer:{
        marginHorizontal: 25,
        marginVertical: 40,
        borderTopWidth: 2.5,
        borderColor: '#086ad8',
    },
    userText:{
        borderColor: '#086ad8',
        paddingVertical: 20,
        borderBottomWidth: 2.5,
        fontSize: 16,
        fontWeight: 500,
        color: '#444',
        paddingLeft: 10,
    }
});

export default User;