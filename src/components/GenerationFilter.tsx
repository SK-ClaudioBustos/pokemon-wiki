import { useFilterContext } from "@/context/filter.context";
import { useFetch } from "@/hooks/useFetch";
import { GenerationData, GenerationsList } from "@/types/generations";
import { toCapitalize } from "@/utils/functions/capitalize";
import { Loading } from "@/utils/Loading";
import "@styles/GenerationFilter.css";

export const GenerationFilter = () => {
    const { pokemonGeneration, setPokemonGeneration } = useFilterContext();
    const API_URL = `https://pokeapi.co/api/v2/generation/`;
    const { data, error, loading } = useFetch<GenerationsList>(API_URL);

    if (loading) {
        return <div className="container-center" style={{ height: "300px" }}><Loading descripcion="Loading Filter" /></div>
    }

    if (error) {
        return <><h1>Ocurrio un error</h1></>
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPokemonGeneration(parseInt(event.target.value));
    }

    const generations: GenerationData[] = data?.results.map((generation) => {
        const id = generation.url.split("/").slice(-2, -1)[0];

        const name = generation.name.split("-").reduce((result, word, index) => {
            if (index === 0) {
                // Capitalizar el primer segmento
                return toCapitalize(word);
            } else {
                // Convertir los siguientes segmentos a mayúsculas y agregarlos con un espacio
                return `${result} ${word.toUpperCase()}`;
            }
        }, "");
        return { id, name };
    }) || [];

    return (
        <div className="filter">
            <label htmlFor="generation_filter">Select a Generation</label>
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
    );
}