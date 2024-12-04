import { useFilterContext } from "@context";
import { useFetch } from "@hooks/useFetch";
import "@styles/GenerationFilter.css";
import { GenerationData, GenerationsList } from "@types";
import { getGenerationData, Loading } from "@util";
import { useMemo } from "react";

export const GenerationFilter = () => {
    const { pokemonGeneration, setPokemonGeneration } = useFilterContext();
    const API_URL = `https://pokeapi.co/api/v2/generation/`;
    const { data, error, loading } = useFetch<GenerationsList>(API_URL);

    const generations: GenerationData[] = useMemo(() => {
        if (data) {
            return getGenerationData(data);
        } else return []
    }, [data]);

    if (loading) {
        return <Loading descripcion="Loading Filter" />
    }

    if (error) {
        return <><h1>Ocurrio un error</h1></>
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPokemonGeneration(parseInt(event.target.value));
    }

    return (
        <div className="filter">
            <label htmlFor="generation_filter">Select a Generation</label>
            <div className="container-center">
                <select id="generation_filter" className="select-generation" onChange={handleChange}>
                    {
                        generations.length > 0 && generations?.map((generation) => {
                            if (parseInt(generation.id) === pokemonGeneration) {
                                return <option key={generation.id} value={generation.id}> {generation.name}</option>
                            } else {
                                return <option key={generation.id} value={generation.id}> {generation.name}</option>
                            }
                        })
                    }
                </select>
            </div>
        </div>
    );
}