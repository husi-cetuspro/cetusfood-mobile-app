import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';

const Alert = (props) => {
    return (
        <View>
             <Modal
                animationType="fade"
                visible={props.modalVisible}
                transparent={true}
            ><View style={styles.alertContainer}>
                    <View style={styles.alertTextContainer}>
                        <Text>{props.text}</Text>
                        <TouchableOpacity onPress={props.closeAlert} style={styles.alertButtonContainer}>
                            <Text style={styles.alertButtonText}>{props.closeButton}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    alertContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0, 0.5)",
    },
    alertTextContainer: {
        width: "75%",
        height: 200,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderRadius: 5,
        paddingVertical: 50,
    },
    alertButtonText: {
        textTransform: "none",
        fontSize: 15,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: "500",
    },
    alertButtonContainer: {
        borderRadius: 5,
        backgroundColor: '#086ad8',
        paddingHorizontal: 30,
        marginTop: 20,
    },
});

export default Alert;