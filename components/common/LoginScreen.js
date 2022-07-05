import React from 'react';
import { StyleSheet, View  } from 'react-native';

const LoginScreen = ({children, ...props}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
        flex: 1,
    },
});

export default LoginScreen;