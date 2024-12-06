import { useModalContext } from "@context";
import "@styles/ListItem.css";
import { PokemonData } from "@types";
import { LazyImage } from "./LazyImage";

interface Props {
    pokemon: PokemonData;
}

export const ListItem = ({ pokemon }: Props) => {
    const { setShowModal, setPokemonMetadata } = useModalContext();

    const handleClick = () => {
        const metadata = {
            id: pokemon.id,
            name: pokemon.name
        }
        setShowModal(true);
        setPokemonMetadata(metadata);
    }

    return (
        <div className="item" onClick={handleClick}>
            <LazyImage pokemon={pokemon} />
            <p>{pokemon.name}</p>
        </div>
    );
};
