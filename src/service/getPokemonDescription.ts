import { PokemonSpecie } from "@types";

export const getPokemonDescription = async (
  pokemonId: string
): Promise<PokemonSpecie> => {
  try {
    const API_DESCRIPTION = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
    const response = await fetch(API_DESCRIPTION);
    const result: PokemonSpecie = await response.json();
    return result;
  } catch (error) {
    throw new Error("Failed on retrieve Pokemon description");
  }
};
