import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={[styles.item, styles.itemLeft]}>
                <Image style={styles.icon} source={require('../../assets/icon/cart.svg')} />
            </View>
            <View style={[styles.item, styles.itemRight]}>
                <Image style={styles.icon} source={require('../../assets/icon/user.svg')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        position:  'fixed',
        width: '100%',
        bottom: 0,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#086ad8',
    },
    itemLeft:{
        borderRightWidth: 1,
        borderRightColor: '#000',
        width: '50%',
    },
    itemRight:{
        borderLeftWidth: 1,
        borderLeftColor: '#000',
        width: '50%',
    },
    itemText: {
        color:'#fff',
        fontSize: 15,
    },
    item: {
        alignItems: 'center',
    },
    icon:{
        minHeight: 30,
        width: 30,
    }
});

export default Footer;