import { ListItem } from "@component";
import { useFilterContext } from "@context";
import "@styles/PokemonList.css";
import { Error, Loading } from "@util";

export const PokemonList = () => {
    const { search, pokemonList, loadingPokemonList, errorPokemonList } = useFilterContext();

    if (loadingPokemonList) {
        return <div className="container-center" style={{ height: "300px" }}><Loading descripcion="Loading" /></div>
    }

    if (errorPokemonList) {
        return <Error error={errorPokemonList} />;
    }

    if (!pokemonList) {
        return (
            <div className="container-center">
                <h1> No Pokemons to show</h1>
            </div>
        );
    }

    const pokemons = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().startsWith(search as string));

    return (
        <div>
            {
                pokemons.length > 0
                    ? (
                        <div className="grid">
                            {
                                pokemons.map((item) => (
                                    <ListItem key={item.id} pokemon={item} />
                                ))
                            }
                        </div>
                    )
                    : (
                        <div className="container-center" style={{ textAlign: "center", marginTop: "3rem" }}>
                            <p style={{ color: "#fff", textWrap: "nowrap" }}>No Pokémons Founded</p>
                        </div>
                    )
            }
        </div>
    );
}