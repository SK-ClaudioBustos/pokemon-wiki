import { ReactNode, useState, useMemo } from "react";
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

  const contextValue = useMemo(
    () => ({
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
    }),
    [
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
    ]
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
