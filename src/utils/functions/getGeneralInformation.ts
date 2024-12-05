import { Pokemon, Stat, Type } from "@types";

interface GeneralData {
    name: string;
    img: {
        normal: string,
        shiny: string
    };
    stats: Stat[];
    types: Type[];
}

export const getGeneralInformation = (pokemon: Pokemon): GeneralData => {
    const data: GeneralData = {
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