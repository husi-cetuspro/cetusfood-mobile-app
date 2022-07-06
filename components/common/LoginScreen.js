import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';

const GenericScreen = ({ children, ...props }) => {
    return (
        <SafeAreaView style={styles.container} {...props}>
            <ScrollView style={styles.scroll}>
                <View style={{ marginBottom: 20 }}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../assets/logoLoginPage.png')} resizeMode='contain' />
                    </View>
                    <View>
                        {children}
                    </View>
                </View>
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
    logoContainer: {
        alignItems: 'center',
    },
    scroll: {
        height: '100%',
    },
    logo: {
        height: undefined,
        aspectRatio: 1 / 1,
        width: '80%',
        marginHorizontal: 'auto',
    }
});

export default GenericScreen;