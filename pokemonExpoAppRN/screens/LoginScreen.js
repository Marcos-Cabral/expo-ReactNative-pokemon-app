import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import firebaseConfig from '../config/firebase-config';
import image from '../assets/icon.png';
import { useForm } from '../hooks/useForm';
import Input from '../Componentes/Input';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export default function LoginScreen({ navigation, param }) {
  const [inputUserNameValue, handleInputUserNameChange] = useForm('');
  const [inputPasswordValue, handleInputPasswordChange] = useForm('');
  const { dispatch } = useContext(AuthContext);

  const handleSignIn = async () => {
    if (!inputUserNameValue || !inputPasswordValue) {
      alert("Complete los campos");
      return;
    }
    const user = inputUserNameValue.toLowerCase();
    const pass = inputPasswordValue.toLowerCase();
    var list = [];
    var snap = await firebaseConfig.db.collection('Usuario').where('UserName', '==', user).where('Password', '==', pass).get();

    snap.forEach((doc) => {
      list.push(doc.data());
    });
    if (!list.length) {
      alert("Datos erroneos");
      return;
    }

    const { UserName } = list[0];

    dispatch({
      type: types.login,
      payload: {
        userName: UserName
      }
    });
  }

  return (
    <View style={styles.row}>
      <Image
        source={image}
        style={{ width: 150, height: 150 }} />

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

      <TouchableOpacity onPress={() => { navigation.navigate("Register") }}>
        <Text style={styles.textCreateAccount}>Don't have an account?
          <Text style={styles.secondaryColor}> Let's create one</Text>
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
    // outline: 'none',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCreateAccount: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15
  }
});