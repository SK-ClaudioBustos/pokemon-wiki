import { FiltersSection, PokemonList, Title } from "@component";
import "@styles/App.css";
import { FilterProvider } from "./context/filter.provider";

function App() {

  return (
    <FilterProvider>
      <header>
        <Title />
        <FiltersSection />
      </header>
      <main>
        <PokemonList />
      </main>
    </FilterProvider>
  )
}

export default App;
