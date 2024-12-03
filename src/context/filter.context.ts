import { createContext, useContext } from "react";

interface FilterContextType {
    pokemonGeneration: number | null
    setPokemonGeneration: React.Dispatch<React.SetStateAction<number>>
}

export const FilterContext = createContext<FilterContextType>({
    pokemonGeneration: null,
    setPokemonGeneration: () => { }
})

export const useFilterContext = () => {
    const context = useContext(FilterContext)

    if (!context.pokemonGeneration && context.pokemonGeneration !== 0) {
        throw new Error("FilterContext must be used within a FilterContextProvider")
    }

    return context;
}
