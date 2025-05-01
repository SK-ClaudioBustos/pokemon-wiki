import { Generation, MainRegion, PokemonData } from "@types";
import { toCapitalize } from "@util";

export const getPokemonList = async (
  pokemonGeneration: number
): Promise<PokemonData[]> => {
  try {
    const API_URL = `https://pokeapi.co/api/v2/generation/${pokemonGeneration}/`;
    const response = await fetch(API_URL);
    const pokemonsGeneration: Generation = await response.json();

    const pokemonList = pokemonsGeneration?.pokemon_species.map((item: MainRegion) => {
      const id = item.url.split("/").slice(-2, -1)[0];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      const name = toCapitalize(item.name);
      return { id, name, imageUrl: image };
    });

    return pokemonList;

  } catch (error) {
    throw new Error("Failed on fetch pokemon list");
  }
};
