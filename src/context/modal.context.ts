import { createContext, useContext } from "react";

type PokemonMetadata = {
    id: string;
    name: string;
};

interface ModalContextType {
    showModal: boolean | null;
    pokemonMetadata: PokemonMetadata | null;
    setPokemonMetadata: React.Dispatch<React.SetStateAction<PokemonMetadata>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType>({
    showModal: null,
    pokemonMetadata: null,
    setPokemonMetadata: () => {},
    setShowModal: () => {}
});

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("ModalContext must be used within a ModalContextProvider");
    }
    return context;
} 
