import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericScreen from '../../../common/GenericScreen';
import { useNavigation } from '@react-navigation/native';

const SingleOrder = () => {
    const navigation = useNavigation();
    return (
        <GenericScreen>
            <View style={styles.singleOrderContainer}>
                <View style={styles.singleOrderContent}>
                    <Text style={[styles.singleOrderText, styles.singleOrderHeader]}>Numer zamówienia</Text>
                    <Text style={styles.singleOrderText}>1</Text>
                </View>
                <View style={styles.singleOrderContent}>
                    <Text style={[styles.singleOrderText, styles.singleOrderHeader]}>Data złożenia</Text>
                    <Text style={styles.singleOrderText}>06.07.2022</Text>
                </View>
                <View style={styles.singleOrderContent}>
                    <Text style={[styles.singleOrderText, styles.singleOrderHeader]}>Godzina złożenia</Text>
                    <Text style={styles.singleOrderText}>12:39</Text>
                </View>
                <View style={styles.singleOrderContent}>
                    <Text style={[styles.singleOrderText, styles.singleOrderHeader]}>Restauracja</Text>
                    <Text style={styles.singleOrderText}>Pyszne.pl</Text>
                </View>
                <View style={styles.singleContentOrder}>
                    <Text style={[styles.singleOrderText, styles.singleOrderHeader]}>Treść zamówienia:</Text>
                    <Text style={[styles.singleOrderText, styles.singleContentOrderText]}>Zupa, Zupa, Zupa, Zupa, Zupa, Zupa, Zupa, Zupa Zupa, Zupa, Zupa, Zupa, Zupa, Zupa, Zupa, Zupa</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Anuluj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Edytuj</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </GenericScreen>
    )
}

const styles = StyleSheet.create({
    singleOrderContainer: {
        borderTopWidth: 1,
        borderColor: '#777',
        marginTop: 30,
    },
    singleOrderHeader: {
        fontWeight: '500'
    },
    singleOrderContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#777',
        paddingVertical: 15,
    },
    singleContentOrder: {
        paddingTop: 25,
        paddingHorizontal: 10,
    },
    singleContentOrderText: {
        paddingTop: 10,
    },
    userText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#444',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        fontSize: 14,
        textTransform: 'uppercase',
        paddingVertical: 15,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: "500",
    },
    button: {
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: '#086ad8',
        width: '49%'
    },
});

export default SingleOrder;