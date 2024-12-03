import { ReactNode, useState } from "react";
import { FilterContext } from "./filter.context";

const EmptyFilterState: number = 1;

interface FilterProps {
    children: ReactNode
}

export const FilterProvider = ({ children }: FilterProps) => {
    const [pokemonGeneration, setPokemonGeneration] = useState(EmptyFilterState);

    return (
        <FilterContext.Provider value={{ pokemonGeneration, setPokemonGeneration }}>{children}</FilterContext.Provider>
    )
}
