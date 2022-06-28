import React from 'react';
import { StyleSheet, View, Text, Linking  } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            
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
        textAlign: 'center',
    },
});

export default Header;