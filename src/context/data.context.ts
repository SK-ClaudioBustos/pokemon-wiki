import { EvolutionChain, GeneralDescription, PokemonGeneralData } from "@types";
import { createContext, useContext } from "react";

interface DataContextType {
  pokemonData: PokemonGeneralData | undefined;
  descriptionData: GeneralDescription | undefined;
  evolutionData: EvolutionChain | undefined;
  loadingPokemonData: boolean;
  loadingDescriptionData: boolean;
  loadingEvolutionData: boolean;
  errorPokemonData: Error | null;
  errorDescriptionData: Error | null;
  errorEvolutionData: Error | null;
}

export const DataContext = createContext<DataContextType>({
  pokemonData: undefined,
  descriptionData: undefined,
  evolutionData: undefined,
  loadingPokemonData: false,
  loadingDescriptionData: false,
  loadingEvolutionData: false,
  errorPokemonData: null,
  errorDescriptionData: null,
  errorEvolutionData: null,
});

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be within DataContextProvider");
  }
  return context;
};
