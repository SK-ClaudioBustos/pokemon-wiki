import { FiltersSection, Title } from "@component";
import { TextWithLink } from "@util";

export const Header = () => {
    return (
        <header>
            <div className="container-center">
                <TextWithLink
                    ariaLabel="Go to PokéApi Website"
                    link="https://pokeapi.co/?ref=public-apis"
                    text="Powered by "
                    textLink="PokéApi"
                />
            </div>
            <Title />
            <FiltersSection />
        </header>
    );
}