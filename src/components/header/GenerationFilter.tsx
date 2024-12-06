import { useFilterContext } from "@context";
import "@styles/GenerationFilter.css";
import { Error, Loading } from "@util";

export const GenerationFilter = () => {
    const { pokemonGeneration, generations, loadingGenerations, errorGenerations, setPokemonGeneration } = useFilterContext();

    if (loadingGenerations) {
        return <Loading descripcion="Loading Filter" />;
    }

    if (errorGenerations) {
        return <Error error={errorGenerations} />;
    }

    if (!generations) {
        return (
            <div className="container-center">
                <h1> No Available Generations</h1>
            </div>
        );
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