import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import firebaseConfig from '../config/firebase-config';
import image from '../assets/icon.png';
import Input from '../Componentes/Input';
import { useForm } from '../hooks/useForm';
import { types } from '../types/types';
import { AuthContext } from '../auth/AuthContext';

export default function RegisterScreen({ navigation, param }) {
    const [inputUserNameValue, handleInputUserNameChange] = useForm('');
    const [inputPasswordValue, handleInputPasswordChange] = useForm('');
    const { dispatch } = useContext(AuthContext);

    const handleSignIn = async () => {
        if (!inputUserNameValue || !inputPasswordValue) {
            alert("Complete los campos");
            return;
        }
        const userName = inputUserNameValue.toLowerCase();
        var list = [];
        var snap = await firebaseConfig.db.collection('Usuario').where('UserName', '==', userName).get();

        snap.forEach((doc) => {
            list.push(doc.data());
        });

        if (list.length) {
            alert("Elija otro nombre");
            return;
        }
        const password = inputPasswordValue.toLowerCase();
        await firebaseConfig.db.collection('Usuario').add({
            UserName: userName,
            Password: password
        });

        dispatch({
            type: types.register,
            payload: {
                userName: userName
            }
        });
    }

    return (
        <View style={styles.row}>
            <Image
                source={image}
                style={{ width: 150, height: 150 }} />
            <Text style={{ width: '100%', color: '#ffffff', fontSize: 20, textAlign: 'center' }}>Please complete the fields to create your account</Text>
            <View style={styles.formContainer}>

                <Text style={styles.label}>USERNAME *</Text>
                <Input
                    handleInputChange={handleInputUserNameChange}
                    placeholder="userName"
                    style={styles.input} />

                <Text style={[styles.label, { marginTop: 20 }]}>PASSWORD *</Text>
                <Input
                    handleInputChange={handleInputPasswordChange}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="password" />
            </View>

            <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}
            >
                <Text style={styles.textCreateAccount}>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                <Text style={styles.textCreateAccount}>Already have an account?
                    <Text style={styles.secondaryColor}> Sign in</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: '#464343',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 50
    },
    formContainer: {
        width: '100%'
    },
    secondaryColor: {
        color: '#E95B5B'
    },
    input: {
        width: '100%',
        //outline: 'none',
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff',
        paddingVertical: 5,
        paddingHorizontal: 0,
        color: '#ffffff',
        fontSize: 18
    },
    label: {
        color: '#E95B5B',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 0,
        margin: 0,
        fontSize: 20
    },
    button: {
        width: '80%',
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: '#E95B5B',
        borderRadius: 50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    textCreateAccount: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    }
});