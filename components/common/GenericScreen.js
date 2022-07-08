import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const GenericScreen = (props) => {
    return (
        <SafeAreaView style={styles.container} {...props}>
            <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1 }}>
                <Header />
                <View style={styles.content}>
                    {props.children}
                </View>
                {props.inputOpen ? null : <Footer />}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginTop: '10%',
    },
    scroll: {
        height: '100%',
        position: 'relative',
        ...Platform.select({
            ios: {
               flex: 1,
            }
        })
    },
    content: {
        paddingHorizontal: 25,
        width: '100%',
        marginBottom: 90,
    },
});

export default GenericScreen;