import { GenerationData, PokemonData } from "@types";
import { createContext, useContext } from "react";

interface FilterContextType {
    pokemonGeneration: number | null
    search: string | null

    pokemonList: PokemonData[] | null,
    loadingPokemonList: boolean,
    errorPokemonList: Error | null,

    generations: GenerationData[] | null;
    loadingGenerations: boolean,
    errorGenerations: Error | null;

    setPokemonGeneration: React.Dispatch<React.SetStateAction<number>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const FilterContext = createContext<FilterContextType>({
    pokemonGeneration: null,
    search: null,
    pokemonList: null,
    loadingPokemonList: false,
    errorPokemonList: null,
    generations: null,
    loadingGenerations: false,
    errorGenerations: null,
    setPokemonGeneration: () => { },
    setSearch: () => { }
})

export const useFilterContext = () => {
    const context = useContext(FilterContext)

    if (!context.pokemonGeneration && context.pokemonGeneration !== 0) {
        throw new Error("FilterContext must be used within a FilterContextProvider")
    }

    return context;
}
