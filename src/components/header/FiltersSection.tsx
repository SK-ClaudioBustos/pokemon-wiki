import "@styles/FiltersSection.css";
import { SearchBar } from "./SearchBar";
import { GenerationFilter } from "./GenerationFilter";

export const FiltersSection = () => {
    return (
        <section className="filters-container">
            <SearchBar />
            <GenerationFilter />
        </section>
    );
}