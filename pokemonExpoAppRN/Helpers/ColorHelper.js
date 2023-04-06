import { filterTypeName } from '../Helpers/FilterItem';
import { pokemonType } from './HelperTiposPokemon';

//convierte un color hexadecimal en rgb.
function hexToRgb(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

//toma los dos tipos del pokemon, obtiene cada color, lo transforma a rgb, y devuelve el gradient.
export const getColorGradiente = (types) =>{
    const primaryColor = filterTypeName(pokemonType, types[0].type.name)[0].color;
    const secondaryColor = filterTypeName(pokemonType, types[1].type.name)[0].color;

    const colorRGB1 = hexToRgb(primaryColor);
    const colorRGB2 = hexToRgb(secondaryColor);
    //22 100
    return `linear-gradient(41deg, rgba(${colorRGB1.r},${colorRGB1.g},${colorRGB1.b},1) 15%, rgba(${colorRGB2.r},${colorRGB2.g},${colorRGB2.b},1) 85%)`;
  }

