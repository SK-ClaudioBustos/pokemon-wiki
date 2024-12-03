import { FiltersSection, PokemonList, Title } from "@component";
import { FilterProvider, ModalProvider } from "@context";
import "@styles/App.css";

function App() {

  return (
    <FilterProvider>
      <header>
        <Title />
        <FiltersSection />
      </header>
      <main>
        <ModalProvider>
          <PokemonList />
        </ModalProvider>
      </main>
    </FilterProvider>
  )
}

export default App;
