import { pokemonType } from './HelperTiposPokemon';
import {filterTypeName} from './FilterItem';


export const getIconByType = (typeName) => { 
    return filterTypeName(pokemonType, typeName)[0].icon;
};