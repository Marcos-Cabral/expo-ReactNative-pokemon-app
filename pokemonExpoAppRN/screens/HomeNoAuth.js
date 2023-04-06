import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import image from '../assets/icon.png';

export default function HomeNoAuth({ navigation }) {


    const handleDirectLogin = () => {
        navigation.navigate("Login")
    }
    const handleDirectRegister = () => {
        navigation.navigate("Register")
    }
    return (
        <View style={styles.row}>
            <View style={styles.titleContainer}>
                <Image
                    source={image}
                    style={{ width: 50, height: 50 }} />

                <Text style={styles.greyText}>
                    Poki
                    <Text style={styles.redText}>mon</Text>
                </Text>
            </View>
            <TouchableOpacity onPress={handleDirectLogin} style={styles.button}>
                <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDirectRegister} style={[styles.button, { backgroundColor: '#ffffff' }]}>
                <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        width: '100%',
        backgroundColor: '#464343',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greyText: {
        fontSize: 50,
        color: '#f5f6fa',
        // fontFamily: 'Nunito_700Bold',
        letterSpacing: 10,
    },
    redText: {
        fontSize: 50,
        //fontFamily: 'Nunito_700Bold',
        color: '#e95b5b',
        letterSpacing: 10,
    },
    titleContainer: {
        marginTop: 25,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: '#E95B5B',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    loginText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    registerText: {
        color: '#E95B5B',
        fontWeight: 'bold',
        fontSize: 15
    }
});