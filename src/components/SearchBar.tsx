import "@styles/SearchBar.css";

export const SearchBar = () => {
    return (
        <div className="container-center">
            <input className="search-bar" placeholder="Search a Pokemón" type="text" />
        </div>
    );
}