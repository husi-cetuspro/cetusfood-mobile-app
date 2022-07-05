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
        borderBottomWidth: 3,
        borderColor: '#086ad8',
        marginBottom: 10,
    },
    logo:{
        maxHeight: 75,
        width: 160,
    }
});

export default Header;