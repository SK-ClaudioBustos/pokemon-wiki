import { Generation, MainRegion } from "@types";
import { toCapitalize } from "./capitalize";

export const getPokemonList = (data: Generation) => {
    return data?.pokemon_species.map((item: MainRegion) => {
        const id = item.url.split("/").slice(-2, -1)[0];
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const name = toCapitalize(item.name);
        return { id, name, imageUrl: image };
    });
}