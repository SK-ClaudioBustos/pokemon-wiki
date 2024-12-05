import { Chain, EvolutionChain } from "@types";
import { toCapitalize } from "./capitalize";

export interface EvolutionPokemonData {
    id: string
    name: string
    imgUrl: string
    level: number
}

const extractIdFromUrl = (url: string) => {
    const parts = url.split("/");
    return parts[parts.length - 2]; // El penúltimo elemento es el ID
};

// Función recursiva para recorrer el árbol de evolución
const getEvolutionData = (chain: Chain, result: EvolutionPokemonData[], level: number) => {
    if (!chain) { return result };

    // Extraer el nombre e ID del Pokémon actual
    const id = extractIdFromUrl(chain.species.url);
    result.push({
        id,
        name: toCapitalize(chain.species.name),
        imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        level
    });

    // Recorrer las siguientes evoluciones (pueden ser múltiples)
    if (chain.evolves_to.length === 0) return result;

    chain.evolves_to.forEach((next) => {
        getEvolutionData(next, result, level + 1);
    });

    return result;
};

export const getEvolutions = (data: EvolutionChain): EvolutionPokemonData[][] => {
    // Obtengo todas las evoluciones pertenecientes al pokémon
    const result: EvolutionPokemonData[] = [];
    const evolutions = getEvolutionData(data.chain, result, 0);
    
    // Agrupo cada pokemon en su respectiva fase
    const groupedByLevel = evolutions.reduce((acc: EvolutionPokemonData[][], pokemon) => {
        // Si la clave para el nivel no existe, se crea un array vacío
        if (!acc[pokemon.level]) {
            acc[pokemon.level] = [];
        }
        // Empujar el objeto actual al array correspondiente
        acc[pokemon.level].push(pokemon);
        return acc;
    }, [])

    return groupedByLevel;
}