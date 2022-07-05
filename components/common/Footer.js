import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={[styles.itemLeft, styles.item]}>
                <MaterialCommunityIcons name="cart-outline" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemRight, styles.item]}>
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