import { useFetch } from "@hooks/useFetch";
import { EvolutionChain, Pokemon, PokemonSpecie } from "@types";
import { ReactNode, useEffect, useState } from "react";
import { DataContext } from "./data.context";

interface DataProviderProps {
    children: ReactNode
    pokemonId: string
}

export const DataProvider = ({ pokemonId, children }: DataProviderProps) => {
    const API_GENERAL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    const { data: generalData, loading: loadingGeneralData, error: errorGeneralData } = useFetch<Pokemon>(API_GENERAL);

    useEffect(() => {
        if (!loadingGeneralData) {
            const soundUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
            const audio = new Audio(soundUrl);
            audio.play();
        }
    }, [loadingGeneralData]);

    const API_DESCRIPTION = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
    const { data: descriptionData, loading: loadingDescriptionData, error: errorDescriptionData } = useFetch<PokemonSpecie>(API_DESCRIPTION);

    // Estado para manejar el segundo fetch (de evolución) que depende del primero
    const [evolutionData, setEvolutionData] = useState<EvolutionChain | null>(null);
    const [loadingEvolutionData, setLoadingEvolutionData] = useState<boolean>(false);
    const [errorEvolutionData, setErrorEvolutionData] = useState<Error | null>(null);

    // Control de ejecución del segundo fetch una vez que descriptionData esté disponible
    useEffect(() => {
        if (descriptionData && descriptionData.evolution_chain) {
            const evolutionChainId = descriptionData.evolution_chain.url.split("/").slice(-2, -1)[0];
            const API_EVOLUTION = `https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}/`;

            setLoadingEvolutionData(true); // Inicia el loading

            // Realiza el fetch para la cadena de evolución
            fetch(API_EVOLUTION)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("An error has ocurred");
                    }
                    return response.json();
                })
                .then((data) => {
                    setEvolutionData(data); // Guarda los datos de la evolución
                })
                .catch((error) => {
                    setErrorEvolutionData(error); // Maneja errores
                }).finally(() => {
                    setLoadingEvolutionData(false); // Termina el loading
                });
        }
    }, [descriptionData]); // Este useEffect solo se dispara cuando `descriptionData` cambia

    return (
        <DataContext.Provider
            value={{
                generalData,
                loadingGeneralData,
                errorGeneralData,
                descriptionData,
                loadingDescriptionData,
                errorDescriptionData,
                evolutionData,
                loadingEvolutionData,
                errorEvolutionData
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
