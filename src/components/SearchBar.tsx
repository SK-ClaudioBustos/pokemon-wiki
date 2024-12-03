import "@styles/SearchBar.css";

export const SearchBar = () => {
    return (
        <div className="filter">
            <label htmlFor="search-bar">Search a Pokemón</label>
            <div className="container-center">
                <input id="search-bar" className="search-bar" placeholder="Pikachu, Charmander..." type="text" />
            </div>
        </div>
    );
}