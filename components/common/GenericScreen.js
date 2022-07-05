import React from 'react';
import { StyleSheet, View  } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const GenericScreen = ({children, ...props}) => {
    return (
        <View style={styles.container}>
            <Header/>
                {children}
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
        flex: 1,
    },
});

export default GenericScreen;