import { getPokemon } from "@service/getPokemon";
import { getPokemonDescription } from "@service/getPokemonDescription";
import { skipToken, useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";
import { DataContext } from "./data.context";
import { getEvolutionTree } from "@service/getEvolutionTree";

interface DataProviderProps {
  children: ReactNode;
  pokemonId: string;
}

export const DataProvider = ({ pokemonId, children }: DataProviderProps) => {
  const {
    data: pokemonData,
    isLoading: loadingPokemonData,
    error: errorPokemonData,
  } = useQuery({
    queryKey: ["pokemon", pokemonId, "data"],
    queryFn: () => getPokemon(pokemonId),
    staleTime: 1000 * 6 * 60 * 1,
  });

  const { data: descriptionData, isLoading: loadingDescriptionData, error: errorDescriptionData} = useQuery({
    queryKey: ["pokemon", pokemonId, "description"],
    queryFn: () => getPokemonDescription(pokemonId),
  });

  const { data: evolutionData, isLoading: loadingEvolutionData, error: errorEvolutionData} = useQuery({
    queryKey: ['pokemon', pokemonId, 'evolution-chain'],
    queryFn: descriptionData ? () => getEvolutionTree(descriptionData!.evolution_chain_url) : skipToken,
  });

  useEffect(() => {
    if (!loadingPokemonData) {
      const soundUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
      const audio = new Audio(soundUrl);
      audio.play();
    }
  }, [loadingPokemonData]);

  return (
    <DataContext.Provider
      value={{
        pokemonData,
        loadingPokemonData,
        errorPokemonData,
        descriptionData,
        loadingDescriptionData,
        errorDescriptionData,
        evolutionData,
        loadingEvolutionData,
        errorEvolutionData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
