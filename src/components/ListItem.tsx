import { PokemonData } from "@/types/types";
import "@styles/ListItem.css";

interface Props {
    pokemon: PokemonData
}

export const ListItem = ({ pokemon }: Props) => {
    return(
        <div className="item">
            <img src={`${pokemon.imageUrl}`} alt={`${pokemon.name} image`} />
            <p>{pokemon.name}</p>
        </div>
    );
} 