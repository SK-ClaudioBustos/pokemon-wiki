import { EvolutionChain, Pokemon, PokemonSpecie } from "@types";
import { createContext, useContext } from "react";

interface DataContextType {
    generalData: Pokemon | null,
    descriptionData: PokemonSpecie | null,
    evolutionData: EvolutionChain | null
    loadingGeneralData: boolean,
    loadingDescriptionData: boolean,
    loadingEvolutionData: boolean,
    errorGeneralData: Error | null,
    errorDescriptionData: Error | null,
    errorEvolutionData: Error | null,
}

export const DataContext = createContext<DataContextType>({
    generalData: null,
    descriptionData: null,
    evolutionData: null,
    loadingGeneralData: false,
    loadingDescriptionData: false,
    loadingEvolutionData: false,
    errorGeneralData: null,
    errorDescriptionData: null,
    errorEvolutionData: null,
});


export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be within DataContextProvider");

    }
    return context;
}
