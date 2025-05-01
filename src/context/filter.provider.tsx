import { ReactNode, useState } from "react";
import { FilterContext } from "./filter.context";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@service/getPokemonList";
import { getGenerationsOptions } from "@service/getGenerationsOptions";

const EmptyFilterState: number = 1;

interface FilterProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProps) => {
  const [pokemonGeneration, setPokemonGeneration] = useState(EmptyFilterState);
  const [search, setSearch] = useState("");

  const {
    data: pokemonList = [],
    isLoading: loadingPokemonList,
    error: errorPokemonList,
  } = useQuery({
    queryKey: ["pokemon-generation", pokemonGeneration],
    queryFn: () => getPokemonList(pokemonGeneration),
  });

  const {
    data: generations = [],
    isLoading: loadingGenerations,
    error: errorGenerations,
  } = useQuery({
    queryKey: ["pokemon-generations", "select-options"],
    queryFn: () => getGenerationsOptions(),
  });

  return (
    <FilterContext.Provider
      value={{
        search,
        pokemonGeneration,
        pokemonList,
        loadingPokemonList,
        errorPokemonList,
        generations,
        loadingGenerations,
        errorGenerations,
        setPokemonGeneration,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
