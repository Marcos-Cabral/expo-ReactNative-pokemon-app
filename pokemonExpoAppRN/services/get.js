const urlGetPokemonByName = 'https://pokeapi.co/api/v2/pokemon/';
const urlGetByType = 'https://pokeapi.co/api/v2/type/';

export const getSinglePokemon = async (pokemon) => {
    const res = await fetch(urlGetPokemonByName + pokemon);
    const json = await res.json();
    return json;
}

export const getAllPokemon = async (limit = 25, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) { console.log(err) }
};

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) { }
}
export const getPokemonByType = async (type) => {
    const res = await fetch(urlGetByType + type);
    return await res.json();
}
export const getPokemonById = (id) => {
    try {
        const url = urlGetPokemonByName + id;
        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((articulos) => {
                return (articulos);
            })
        //console.log(data);
        // const response = fetch(url);
        //const data = response.json();
        //return data;
    } catch (err) { }
}