import { PokemonList } from "@component";
import { ModalProvider } from "@context";

export const Main = () => {
    return (
        <main>
            <ModalProvider>
                <PokemonList />
            </ModalProvider>
        </main>
    );
}