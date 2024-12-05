import { Modal, PokemonDetails, PokemonList } from "@component";
import { ModalProvider } from "@context";

export const Main = () => {
    return (
        <main>
            <ModalProvider>
                <PokemonList />
                <Modal>
                    <PokemonDetails />
                </Modal>
            </ModalProvider>
        </main>
    );
}