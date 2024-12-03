import { useModalContext } from "@context";
import { useFetch } from "@hooks/useFetch";
import "@styles/PokemonDetails.css";
import { Pokemon, Stat } from "@types";
import { getPokemonData, Loading, toCapitalize } from "@util";
import { useEffect } from "react";

enum PokemonStatColors {
    HP = "#FF0000",
    ATTACK = "#FF7F00",
    DEFENSE = "#db04ff",
    SPECIAL_ATTACK = "#007FFF",
    SPECIAL_DEFENSE = "#309c30",
    SPEED = "#FF1493",
    ACCURACY = "#9400D3",
    EVASION = "#000000"
}

const pokemonTypes = {
    normal: ["#A8A77A", "#FFFFFF"],
    fighting: ["#C22E28", "#FFFFFF"],
    flying: ["#A98FF3", "#FFFFFF"],
    poison: ["#A33EA1", "#FFFFFF"],
    ground: ["#E2BF65", "#FFFFFF"],
    rock: ["#B6A136", "#FFFFFF"],
    bug: ["#A6B91A", "#FFFFFF"],
    ghost: ["#735797", "#FFFFFF"],
    steel: ["#B7B7CE", "#FFFFFF"],
    fire: ["#EE8130", "#FFFFFF"],
    water: ["#6390F0", "#FFFFFF"],
    grass: ["#7AC74C", "#FFFFFF"],
    electric: ["#F7D02C", "#FFFFFF"],
    psychic: ["#F95587", "#FFFFFF"],
    ice: ["#96D9D6", "#FFFFFF"],
    dragon: ["#6F35FC", "#FFFFFF"],
    dark: ["#705746", "#FFFFFF"],
    fairy: ["#D685AD", "#FFFFFF"],
    stellar: ["#FFD700", "#000000"],
    unknown: ["#68A090", "#FFFFFF"],
};

export const PokemonDetails = () => {
    const { pokemonId, setShowModal } = useModalContext();
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    const { data, error, loading } = useFetch<Pokemon>(API_URL);

    useEffect(() => {
        if (!loading) {
            const soundUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
            const audio = new Audio(soundUrl);
            audio.play();
        }
    }, [loading]);

    if (loading) {
        return <div className="container-center" style={{ height: "100%" }}>
            <Loading descripcion="Loading Pokemon Information" />
        </div>;
    }

    if (error) {
        return <><h1>Unknow Error</h1></>
    }

    if (!data) {
        return <>Nothing to Show</>;
    }

    const pokemonData = getPokemonData(data);

    return (
        <div>
            <div className="details-header">
                <span>
                    {toCapitalize(pokemonData.name)}
                </span>
                <button type="button" className="close-button" onClick={() => setShowModal(false)}>X</button>
            </div>
            <div className="details-content">
                <div className="details-img">
                    <img src={pokemonData.imgUrl} alt={`image of ${pokemonData.name}`} />
                </div>
                <div>
                    <div className="details-stats">
                        <ul>
                            {
                                pokemonData.stats.map((stat: Stat, index) => (
                                    <li
                                        key={index}
                                        style={
                                            { "--i": PokemonStatColors[stat.stat.name.toUpperCase().replace("-", "_") as keyof typeof PokemonStatColors] } as React.CSSProperties
                                        }>
                                        <p>{`${stat.stat.name.toUpperCase().replace("-", " ")}`}</p>
                                        <meter min="0" max="255" value={stat.base_stat}></meter>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="details-types">
                        {
                            pokemonData.types.map((type) => (
                                <div
                                    key={type.type.name}
                                    style={{
                                        "--j": pokemonTypes[type.type.name.toLocaleLowerCase() as keyof typeof pokemonTypes][0],
                                        "--k": pokemonTypes[type.type.name.toLocaleLowerCase() as keyof typeof pokemonTypes][1],
                                    } as React.CSSProperties}
                                    className="pokemon-type">
                                    <span>{type.type.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}