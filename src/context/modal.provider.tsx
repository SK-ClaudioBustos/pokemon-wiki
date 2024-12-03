import { ReactNode, useState } from "react";
import { ModalContext } from "./modal.context";

const EmptyPokemonState = "";

interface ModalProps {
    children: ReactNode
}

export const ModalProvider = ({ children }: ModalProps) => {
    const [pokemonId, setPokemonId] = useState(EmptyPokemonState);
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalContext.Provider value={{
            pokemonId,
            showModal,
            setPokemonId,
            setShowModal
        }}>{children}</ModalContext.Provider>
    );
}