import { PokemonData } from "@/types/pokemons";
import "@styles/ListItem.css";
import { useState } from "react";

interface Props {
    pokemon: PokemonData;
}

export const ListItem = ({ pokemon }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="item">
            <div>
                {isLoading && (
                    <div className="placeholder">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path
                                d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943"
                                style={{ strokeWidth: "1.5", strokeLinecap: "round", stroke: "#0A0A30", animation: "loader4 1.5s linear infinite both", transformOrigin: "center center" }} />
                        </svg>
                    </div>
                )}
                <img
                    src={`${pokemon.imageUrl}`}
                    alt={`${pokemon.name} image`}
                    onLoad={handleImageLoad}
                    className={isLoading ? "hidden" : ""}
                />
            </div>
            <p>{pokemon.name}</p>
        </div>
    );
};
