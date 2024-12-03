import { useFilterContext } from "@context";
import "@styles/SearchBar.css";

export const SearchBar = () => {

    const { setSearch } = useFilterContext();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <div className="filter">
            <label htmlFor="search-bar">Search a Pokemón</label>
            <div className="container-center">
                <input autoComplete="off" onChange={handleSearch} id="search-bar" className="search-bar" placeholder="Pikachu, Charmander..." type="text" />
            </div>
        </div>
    );
}