import { useFilterContext } from "@/context/filter.context";
import { useFetch } from "@/hooks/useFetch";
import { Generation, MainRegion, PokemonData } from "@/types/pokemons";
import { Loading } from "@/utils/Loading";
import "@styles/PokemonList.css";
import { ListItem } from "./ListItem";
import { toCapitalize } from "@/utils/functions/capitalize";

export const PokemonList = () => {
    const { pokemonGeneration } = useFilterContext();
    const API_URL = `https://pokeapi.co/api/v2/generation/${pokemonGeneration}/`;
    const { data, error, loading } = useFetch<Generation>(API_URL);

    if (loading) {
        return <div className="container-center" style={{ height: "300px" }}><Loading descripcion="Loading" /></div>
    }

    if (error) {
        return <><h1>Ocurrio un error</h1></>
    }

    if (!data) {
        return <> No hay pokemones para mostrar</>
    }

    const pokemons: PokemonData[] = data?.pokemon_species.map((item: MainRegion) => {
        const id = item.url.split("/").slice(-2, -1)[0];
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const name = toCapitalize(item.name);
        return { id, name, imageUrl: image };
    })

    return (
        <div className="grid">
            {
                pokemons.map((item) => (
                    <ListItem key={item.id} pokemon={item} />
                ))
            }
        </div>
    );
}