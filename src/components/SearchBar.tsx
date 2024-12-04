import { useFilterContext } from "@context";
import "@styles/SearchBar.css";
import { useDebouncedCallback } from "use-debounce";

export const SearchBar = () => {

    const { setSearch } = useFilterContext();

    const debouncedhandleSearch = useDebouncedCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value);
        },
        300
    );

    return (
        <div className="filter">
            <label htmlFor="search-bar">Search a Pokemón</label>
            <div className="container-center">
                <input autoComplete="off" onChange={debouncedhandleSearch} id="search-bar" className="search-bar" placeholder="Pikachu, Charmander..." type="text" />
            </div>
        </div>
    );
}