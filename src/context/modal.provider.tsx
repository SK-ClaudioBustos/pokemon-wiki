import { ReactNode, useState } from "react";
import { ModalContext } from "./modal.context";

const EmptyPokemonState = {
    id: "",
    name: ""
};

interface ModalProps {
    children: ReactNode
}

export const ModalProvider = ({ children }: ModalProps) => {
    const [pokemonMetadata, setPokemonMetadata] = useState(EmptyPokemonState);
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalContext.Provider value={{
            pokemonMetadata,
            showModal,
            setPokemonMetadata,
            setShowModal
        }}>{children}</ModalContext.Provider>
    );
}