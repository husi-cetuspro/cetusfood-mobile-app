import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericScreen from '../../common/GenericScreen';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../../api/Api';

const HistoryOrder = () => {
    const navigation = useNavigation();
    const axios = require('axios');
    const [orderNumber, setOrderNumber] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        async function doGetRequest() {
            let res = await api.get('/orders');
            setData(res.data);
            let id = [];
            data.forEach(element => {
                id.push(element.id)
            });
            setOrderNumber(id);
        } doGetRequest();
    }, [])

    return (
        <GenericScreen>
            <View style={styles.orderContainer}>
                {data.map(item =>
                    <TouchableOpacity style={styles.orderContent} key={item.id} onPress={() => navigation.navigate('SingleOrder', { itemId: item.id, })}>
                        <Text style={styles.userText}>{item.id}. Zamówienie</Text>
                        <Text style={styles.userText}>06.07.2022</Text>
                    </TouchableOpacity>)}
            </View>
        </GenericScreen>
    )
}

const styles = StyleSheet.create({
    orderContainer: {
        borderTopWidth: 1,
        borderColor: '#777',
        marginTop: 30,
    },
    orderContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderColor: '#777',
        ...Platform.select({
            ios: {
                paddingVertical: 20,
            }
        })
    },
    userText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#444',
        ...Platform.select({
            ios: {
                fontSize: 16,
            }
        })
    }
});

export default HistoryOrder;