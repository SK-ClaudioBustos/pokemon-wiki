import { DataProvider, useModalContext } from "@context";
import "@styles/PokemonDetails.css";
import { useState } from "react";
import { DescriptionTab } from "./DescriptionTab";
import { EvolutionTreeTab } from "./EvolutionTreeTab";
import { GeneralTab } from "./GeneralTab";


export const PokemonDetails = () => {
    const { pokemonMetadata, setShowModal } = useModalContext();
    const [tab, setTab] = useState(1);

    return (
        <div className="pokemon-details-container">
            <div className="details-header">
                <span>
                    {pokemonMetadata?.name}
                </span>
                <button type="button" className="close-button" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div className="tabs">
                <button style={tab === 1 ? { color: "#fff" } : { color: "#808080" }} onClick={() => setTab(1)} type="button">General</button>
                <button style={tab === 2 ? { color: "#fff" } : { color: "#808080" }} onClick={() => setTab(2)} type="button">Description</button>
                <button style={tab === 3 ? { color: "#fff" } : { color: "#808080" }} onClick={() => setTab(3)} type="button">Evolution</button>
            </div>
            <DataProvider pokemonId={pokemonMetadata?.id as string}>
                {
                    tab === 1 && <GeneralTab />
                }
                {
                    tab === 2 && <DescriptionTab />
                }
                {
                    tab === 3 && <EvolutionTreeTab />
                }
            </DataProvider>
        </div>
    );
}