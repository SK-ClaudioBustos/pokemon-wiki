import { ListItem, Modal, PokemonDetails } from "@component";
import { useFilterContext } from "@context";
import { useFetch } from "@hooks/useFetch";
import "@styles/PokemonList.css";
import { Generation, PokemonData } from "@types";
import { getPokemonList, Loading } from "@util";
import { useMemo } from "react";

export const PokemonList = () => {
    const { search, pokemonGeneration } = useFilterContext();
    const API_URL = `https://pokeapi.co/api/v2/generation/${pokemonGeneration}/`;
    const { data, error, loading } = useFetch<Generation>(API_URL);

    const pokemonsArray: PokemonData[] = useMemo(() => {
        if (data) {
            return getPokemonList(data);
        } else return [];
    }, [data]);

    if (loading) {
        return <div className="container-center" style={{ height: "300px" }}><Loading descripcion="Loading" /></div>
    }

    if (error) {
        return <><h1>Ocurrio un error</h1></>
    }

    if (!data) {
        return <> No hay pokemones para mostrar</>
    }

    const pokemons = pokemonsArray.filter((pokemon) => pokemon.name.toLowerCase().startsWith(search as string));

    return (
        <>
            <div className="grid">
                {
                    pokemons.map((item) => (
                        <ListItem key={item.id} pokemon={item} />
                    ))
                }
            </div>
            <Modal>
                <PokemonDetails />
            </Modal>
        </>
    );
}