import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericScreen from '../../../common/GenericScreen';
import { useNavigation } from '@react-navigation/native';
import HistoryOrder from '../HistoryOrder';
import { api } from '../../../../api/Api';

const SingleOrder = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [order, setOrder] = useState({});

    useEffect(() => {
        async function doGetRequest() {
            let res = await api.get(`/orders`);
            let data = res.data;
            const singleOrder = data.flter(item => item.id === itemId)[0];
            i
            setOrder(singleOrder);
        }
        doGetRequest();
    }, []);

    return (
        <GenericScreen>
            <View style={styles.singleOrderContainer}>
                <View style={styles.singleOrderContent}>
                    <Text style={[styles.singleOrderText, styles.singleOrderHeader]}>Numer zamówienia</Text>
                    <Text style={styles.singleOrderText}>{JSON.stringify(itemId)}</Text>
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
                    <Text style={[styles.singleOrderText, styles.singleContentOrderText]}>{order.content}</Text>
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
});

export default SingleOrder;