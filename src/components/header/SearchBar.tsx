import { useFilterContext } from "@context";
import "@styles/SearchBar.css";

export const SearchBar = () => {
    const { search, setSearch } = useFilterContext();

    return (
        <div className="filter">
            <label htmlFor="search-bar">Search a Pokemón</label>
            <div className="container-center">
                <input autoComplete="off" value={search?.toString()} onChange={(e) => setSearch(e.target.value)} id="search-bar" className="search-bar" placeholder="Pikachu, Charmander..." type="text" />
            </div>
        </div>
    );
}