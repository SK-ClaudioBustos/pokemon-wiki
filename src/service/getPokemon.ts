import { Pokemon, PokemonGeneralData } from "@types";

export const getPokemon = async (
  pokemonId: string
): Promise<PokemonGeneralData> => {
  try {
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("An error has ocurred");
    }

    const pokemon: Pokemon = await response.json();
    const data: PokemonGeneralData = {
      name: pokemon.name,
      img: {
        normal: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`,
      },
      stats: pokemon.stats,
      types: pokemon.types,
    };
    return data;
  } catch (error) {
    throw new Error("Failed on retrieve Pokemon data");
  }
};
