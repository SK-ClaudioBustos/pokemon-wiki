import { Pokemon } from "@types";

export const getPokemon = async (pokemonId: string): Promise<Pokemon> => {
  try {
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("An error has ocurred");
    }

    const pokemonData: Pokemon = await response.json();

    return pokemonData;
  } catch (error) {
    throw new Error("Failed on retrieve Pokemon data");
  }
};
