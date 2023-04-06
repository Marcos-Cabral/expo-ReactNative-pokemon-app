import React from 'react';
import ContainerSpritePokemon from './ContainerSpritePokemon';
import { StyleSheet, View, Text, Image } from "react-native";
import { getColorGradiente } from '../Helpers/ColorHelper';
import { filterTypeName } from '../Helpers/FilterItem';
import { pokemonType } from '../Helpers/HelperTiposPokemon';
import { getIconByType } from '../Helpers/TypeIconHelper';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CardPokemon(props) {
    const { pokemon } = props;
    const navigation = props.navigation;
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Profile", { pokemonId: pokemon.id })}>
            <LinearGradient
                colors={pokemon.types.length === 1 ?
                    [filterTypeName(pokemonType, pokemon.types[0].type.name)[0].color, filterTypeName(pokemonType, pokemon.types[0].type.name)[0].color]
                    : [filterTypeName(pokemonType, pokemon.types[0].type.name)[0].color, filterTypeName(pokemonType, pokemon.types[1].type.name)[0].color]
                }
                start={[0, 1]} end={[1, 0]}
                style={styles.container}
            >

                <View style={styles.textNamePokemonContainer}>
                    <Text style={styles.textNamePokemon}>
                        {pokemon.name.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.containerTypeIcon}>
                    <Image
                        source={getIconByType(pokemon.types[0].type.name)}
                        style={{ width: 50, height: 50, backgroundColor: '#ffffff', borderRadius: 50, left: 25, top: 25 }} />
                </View>
                {
                    pokemon.types.length === 1 ?
                        <></>
                        :
                        <View style={styles.containerTypeIcon}>
                            <Image
                                source={getIconByType(pokemon.types[1].type.name)}
                                style={{ width: 50, height: 50, backgroundColor: 'white', borderRadius: 50, left: 100, top: 25 }} />
                        </View>
                }

                <ContainerSpritePokemon style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} pokemon={pokemon} />
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
        height: 200,
        flexDirection: 'column',
        justifyContent: "center",
        width: '100%',
        alignItems: 'flex-end',
        borderRadius: 15,
    },
    textNamePokemonContainer: {
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textNamePokemon: {
        fontSize: 50,
        fontWeight: 'bold',
        display: 'flex',
        color: 'rgba(247, 247, 247, 0.77)',
        position: 'absolute',
        top: 15,
        left: 25,
    },
    containerTypeIcon: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: 10,
        alignItems: 'flex-start',
        position: 'absolute'
    }
});