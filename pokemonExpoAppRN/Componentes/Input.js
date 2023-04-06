import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import firebaseConfig from '../config/firebase-config';
import image from '../assets/icon.png';
import { useForm } from '../hooks/useForm';

export default function Input({ navigation, param, style, placeholder, handleInputChange, secureTextEntry = false }) {

  
   return (
    <TextInput
        style={style}
        placeholder={placeholder}
        placeholderTextColor='#cdcdcd'
        secureTextEntry = {secureTextEntry}
        onChangeText={handleInputChange} />
   );
}