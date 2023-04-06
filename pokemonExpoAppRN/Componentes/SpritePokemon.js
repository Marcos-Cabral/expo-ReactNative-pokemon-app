import React from 'react';
import { StyleSheet, Image } from "react-native";

export default function SpritePokemon(pokemonData) {
    const pokemonInfo = pokemonData.pokemon;
   
    return (
        <Image
            key={pokemonInfo.name}
            style={styles.sprite}
            source={{
                uri: `${pokemonInfo.pokemon.sprites?.other.home.front_default}`,
            }}
        />
    )
}
const styles = StyleSheet.create({
    sprite: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
        zIndex: 10000,
        position: 'relative',
        top: -10,
        left: -100
    }
});