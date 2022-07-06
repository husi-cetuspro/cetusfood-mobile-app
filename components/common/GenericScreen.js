import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const GenericScreen = (props) => {
    return (
        <View style={styles.container} {...props}>
            <Header />
            <View style={styles.content}>
                {props.children}
            </View>
            {props.inputOpen ? null : <Footer />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 25,
        position: 'absolute',
        marginTop: '45%',
        width: '100%',
    },
});

export default GenericScreen;