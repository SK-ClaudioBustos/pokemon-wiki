import { createContext, useContext } from "react";

interface ModalContextType {
    showModal: boolean | null;
    pokemonId: string | null;
    setPokemonId: React.Dispatch<React.SetStateAction<string>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType>({
    showModal: null,
    pokemonId: null,
    setPokemonId: () => { },
    setShowModal: () => { }
});


export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("ModalContext must be used within a ModalContextProvider");
    }
    return context;
} 
