import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericScreen from '../../common/GenericScreen';
import { useNavigation } from '@react-navigation/native';

const HistoryOrder = () => {
    const navigation = useNavigation();
    return (
        <GenericScreen>
            <View style={styles.orderContainer}>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>1. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>2. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>3. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>4. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>5. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>6. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>7. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>8. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderContent} onPress={() => navigation.navigate('SingleOrder')}>
                    <Text style={styles.userText}>9. Zamówienie</Text>
                    <Text style={styles.userText}>06.07.2022</Text>
                </TouchableOpacity>
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
        borderColor: '#777',
        paddingVertical: 15,
    },
    userText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#444',
    }
});

export default HistoryOrder;