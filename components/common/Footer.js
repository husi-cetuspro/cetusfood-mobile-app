import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Form')} style={[styles.itemLeft, styles.item]}>
                <MaterialCommunityIcons name="cart-outline" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('User')} style={[styles.itemRight, styles.item]}>
                <SimpleLineIcons name="user" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingVertical: 15,
        backgroundColor: '#086ad8',
    },
    itemLeft: {
        borderRightWidth: 1,
        borderRightColor: '#000',
        width: '50%',
        minHeight: 30,
    },
    itemRight: {
        borderLeftWidth: 1,
        borderLeftColor: '#000',
        width: '50%',
    },
    item: {
        alignItems: 'center',
    },
});

export default Footer;