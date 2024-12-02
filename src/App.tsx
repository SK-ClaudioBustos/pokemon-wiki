import { PokemonList, SearchBar, Title } from "@component";
import "@styles/App.css";

function App() {

  return (
    <>
      <header>
        <Title />
        <SearchBar />
      </header>
      <main>
        <PokemonList />
      </main>
    </>
  )
}

export default App;
