import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import CardPokemon from '../Componentes/CardPokemon';
import Cargando from '../Componentes/Cargando';
import firebaseConfig from '../config/firebase-config';
import { getPokemonById } from '../services/get';
import { types } from '../types/types';
import image from '../assets/icon.png';

export default function ProfileScreen() {
    const [pokemon, setPokemon] = useState();
    const [pokemonDate, setPokemonDate] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { user, dispatch } = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);
        let pokemonId = 0;
        firebaseConfig.db.collection('UsuarioPokemon').where('Usuario', '==', 'marcoscabral25').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                const { PokemonId, Fecha } = doc.data();
                pokemonId = PokemonId;
                setPokemonDate(Fecha.toDate());
                return;
            });
            getPokemonById(pokemonId).then(e => {
                setPokemon(e);
                setIsLoading(false);
            });

        });
    }, []);

    const cerrarSesion = () => {
        dispatch({
            type: types.logout
        });
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
            <View style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '90%', width: '100%', backgroundColor: '#ffffff', padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <Text style={{ fontSize: 30, color: '#000000' }}>Welcome {user.userName}</Text>
                {isLoading ? <Cargando /> :
                    <View style={styles.card}>
                        <View style={{ display: 'flex' }}>
                            <Text style={{ color: '#ffffff', fontSize: 40, fontWeight: 'bold' }}>{pokemon.name.toUpperCase()}</Text>
                            <Text style={{ color: '#ffffff' }}>{"Friends since" + pokemonDate.getDate() + "/" + parseInt(pokemonDate.getMonth() + 1) + "/" + pokemonDate.getFullYear()}</Text>
                        </View>
                        <View>
                            <Image
                                key={pokemon.name}
                                style={styles.sprite}
                                source={{
                                    uri: `${pokemon.sprites?.other.home.front_default}`,
                                }}
                            />
                        </View>
                    </View>

                }
                {isLoading ? <Cargando /> :
                    <View style={styles.card}>
                        <View style={{ display: 'flex' }}>
                            <Text style={{ color: '#ffffff', fontSize: 40, fontWeight: 'bold' }}>{pokemon.name.toUpperCase()}</Text>
                            <Text style={{ color: '#ffffff' }}>{"Friends since" + pokemonDate.getDate() + "/" + parseInt(pokemonDate.getMonth() + 1) + "/" + pokemonDate.getFullYear()}</Text>
                        </View>
                        <View>
                            <Image
                                key={pokemon.name}
                                style={styles.sprite}
                                source={{
                                    uri: `${pokemon.sprites?.other.home.front_default}`,
                                }}
                            />
                        </View>
                    </View>

                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#464343'
    },
    text: {
        fontSize: 50
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
    sprite: {
        width: 120,
        height: 120,
        // resizeMode: 'contain',
        position: 'relative',
        right: -24
    },
    card: {
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#464343",
        width: '100%',
        borderRadius: 20,
    }
});