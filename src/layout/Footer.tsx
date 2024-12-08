export const Footer = () => {
    return (
        <footer className="container-center" style={{flexDirection: "column", textAlign: "center"}}>
            <span style={{ color: "#fff" }}>
                Pokémon and Pokémon character names are trademarks of Nintendo.
            </span>
            <a
                    href="https://github.com/SK-ClaudioBustos/pokemon-wiki"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit the GitHub repository for this project"
                >
                    Check the code of this project
                </a>
        </footer>
    );
}