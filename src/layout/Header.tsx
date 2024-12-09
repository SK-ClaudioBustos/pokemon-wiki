import { FiltersSection, Title } from "@component";

export const Header = () => {
    return (
        <header>
            <div className="container-center">
                <p style={{ color: "#fff", margin: "0" }}>
                    {`Powered by `}
                    <a
                        href="https://pokeapi.co/?ref=public-apis"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="go to PokéApi Website">
                        PokéApi
                    </a>
                </p>
            </div>
            <Title />
            <FiltersSection />
        </header>
    );
}