import React from 'react';
import { StyleSheet, Image } from "react-native";

export default function PokeballSprite() {
    return (
        <Image
            source={require('../assets/pkmn1.png')}
            style={styles.pokeball} />
    )
}
const styles = StyleSheet.create({
    pokeball: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        position: 'absolute',
        top: 10,
        left: -90
    }
});