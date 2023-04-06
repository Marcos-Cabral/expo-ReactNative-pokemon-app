import React from 'react';
import { StyleSheet, View, Image } from "react-native";
import SpritePokemon from './SpritePokemon';
import PokeballSprite from './PokeballSprite';

export default function ContainerSpritePokemon(pokemon) {
    return (
        <View style={styles.containerSprite}>
            <PokeballSprite />
            <SpritePokemon pokemon={pokemon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerSprite: {
        flex: 1,
        margin: 5, 
        width:50,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start'
    }
});