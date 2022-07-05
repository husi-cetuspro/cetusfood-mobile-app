import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={[styles.item, styles.itemLeft]}>
                <MaterialCommunityIcons name="cart-outline" size={26} color="white" />
            </View>
            <View style={[styles.item, styles.itemRight]}>
                <SimpleLineIcons name="user" size={26} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        maxHeight: '50%',
        bottom: 0,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#086ad8',
    },
    itemLeft: {
        borderRightWidth: 1,
        borderRightColor: '#000',
        width: '50%',
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