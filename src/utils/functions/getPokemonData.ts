import { Pokemon, Stat, Type } from "@types";

interface PokemonDetailsData {
    name: string;
    imgUrl: string;
    stats: Stat[];
    types: Type[];
}

export const getPokemonData = (pokemon: Pokemon): PokemonDetailsData => {
    const data: PokemonDetailsData = {
        name: pokemon.name,
        imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        stats: pokemon.stats,
        types: pokemon.types
    };

    return data;
}