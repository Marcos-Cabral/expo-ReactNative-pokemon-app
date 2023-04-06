import React from 'react';
import { Button, FlatList, View, StyleSheet, Text, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemonData } from '../services/get';
import Pagination from '../Componentes/Pagination';
import CardPokemon from '../Componentes/CardPokemon';
import image from '../assets/icon.png';
import Cargando from '../Componentes/Cargando';
//import { useFonts, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPokemons, setTotalPokemons] = useState(111);
  const [isLoading, setIsLoading] = useState(true);
  //let [fontsLoaded] = useFonts({ Nunito_700Bold });

  useEffect(() => {
    getPokemons();

  }, [page]);


  const getPokemons = async () => {
    try {
      setIsLoading(true);
      const pokemonList = await getAllPokemon(25, 25 * page);
      console.log(pokemonList);
      const pokemonListDetailPromise = pokemonList.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })

      const pokemonDetails = await Promise.all(pokemonListDetailPromise);

      if (!data.length) {
        setData(pokemonDetails);
      } else {
          var arrayViejo = data;
      //  Array.prototype.push.apply(arrayViejo, pokemonDetails);
          var x = arrayViejo.concat(pokemonDetails);
          console.log(x)
          setData(x);
      }
      setIsLoading(false);
      setTotalPokemons(Math.ceil(pokemonList.count / 25));
    } catch (e) { }

  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, totalPokemons - 1);
    setPage(nextPage);
  };
  const pokemonRenderItem = ({ item }) => {
    return (<CardPokemon pokemon={item} navigation={navigation} />);
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
      <FlatList
        data={data}
        initialNumToRender={3}
        renderItem={pokemonRenderItem}
        keyExtractor={(item) => item.name} />

      {isLoading ? <Cargando /> : <Pagination
        onLoadMoreClick={nextPage}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#464343'
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
  }
});