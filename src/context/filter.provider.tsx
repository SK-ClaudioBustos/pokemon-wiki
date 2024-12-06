import { Generation, PokemonData } from "@types";
import { getPokemonList } from "@util";
import { ReactNode, useEffect, useState } from "react";
import { FilterContext } from "./filter.context";

const EmptyFilterState: number = 1;

interface FilterProps {
    children: ReactNode
}

export const FilterProvider = ({ children }: FilterProps) => {
    const [pokemonGeneration, setPokemonGeneration] = useState(EmptyFilterState);
    const [search, setSearch] = useState("");

    const [pokemonList, setPokemonList] = useState<PokemonData[] | null>(null);
    const [loadingPokemonList, setLoadingPokemonList] = useState(false);
    const [errorPokemonList, setErrorPokemonList] = useState<Error | null>(null);

    useEffect(() => {
        setLoadingPokemonList(true);
        const API_URL = `https://pokeapi.co/api/v2/generation/${pokemonGeneration}/`;
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("An unknown error has ocurred");
                }
                return response.json();
            })
            .then((result: Generation) => {
                const data = getPokemonList(result);
                setPokemonList(data);
            })
            .catch((error) => setErrorPokemonList(error))
            .finally(() => setLoadingPokemonList(false));
    }, [pokemonGeneration]);

    return (
        <FilterContext.Provider value={
            {
                search,
                pokemonGeneration,
                pokemonList,
                loadingPokemonList,
                errorPokemonList,
                setPokemonGeneration,
                setSearch
            }
        }>{children}</FilterContext.Provider>
    )
}
