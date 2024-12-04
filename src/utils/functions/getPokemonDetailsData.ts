import { Pokemon, Stat, Type } from "@types";

interface PokemonDetailsData {
    name: string;
    img: {
        normal: string,
        shiny: string
    };
    stats: Stat[];
    types: Type[];
}

export const getPokemonDetailsData = (pokemon: Pokemon): PokemonDetailsData => {
    const data: PokemonDetailsData = {
        name: pokemon.name,
        img: {
            normal: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
            shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
        },
        stats: pokemon.stats,
        types: pokemon.types
    };

    return data;
}