import { Color, GeneralDescription, PokemonSpecie } from "@types";

export const getPokemonDescription = async (
  pokemonId: string
): Promise<GeneralDescription> => {
  try {
    const API_DESCRIPTION = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
    const response = await fetch(API_DESCRIPTION);
    const result: PokemonSpecie = await response.json();
    const entriesFiltered = result.flavor_text_entries.filter(
      (entry) => entry.language.name === "en"
    );
    const entries = entriesFiltered
      .slice(0, 5)
      .map((entry) =>
        entry.flavor_text
          .replace(/\n/g, " ")
          .replace(/[\n↵]/g, "")
          .replace(/\s+/g, " ")
      );
    const descriptionData: GeneralDescription = {
      evolution_chain_url: result!.evolution_chain.url,
      color: result.color,
      is_legendary: result.is_legendary,
      entries: entries.filter(
        (entry, index, self) => self.findIndex((e) => e === entry) === index
      ),
    };

    return descriptionData;
  } catch (error) {
    throw new Error("Failed on retrieve Pokemon description");
  }
};
