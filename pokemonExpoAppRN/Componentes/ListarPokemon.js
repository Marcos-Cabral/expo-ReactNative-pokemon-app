import React, { Fragment } from 'react';
import CardPokemon from './CardPokemon';
import { comparer } from '../Helpers/FilterItem';
import { Button } from 'react-native-paper';

export default function ListarPokemon(props) {
    const { pokemons } = props;
    const { navigation } = props;
    return (
        <Fragment>
            {pokemons?.sort(comparer).map((pokemon) =>
                <CardPokemon pokemon={pokemon} key={pokemon.id} navigation={navigation} />
            )}
        </Fragment>
    );
}