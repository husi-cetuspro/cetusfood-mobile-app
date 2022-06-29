import React from 'react';
import { StyleSheet, View, Text, Image  } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: '#dbdbdb',
    },
    logo:{
        minHeight: 75,
        width: 160,
    }
});

export default Header;