import { FilterProvider } from "@context";
import { Footer, Header, Main } from "@layout";
import "@styles/App.css";

function App() {

  return (
    <FilterProvider>
      <Header />
      <Main />
      <Footer />
    </FilterProvider>
  )
}

export default App;
