import "@styles/Footer.css";
import { TextWithLink } from "@util";

export const Footer = () => {
    return (
        <footer className="footer">
            <TextWithLink
                link="https://github.com/SK-ClaudioBustos/pokemon-wiki"
                text="Check the code of this "
                ariaLabel="Visit the GitHub repository for this project"
                textLink="Project"
            />
            <TextWithLink
                link="https://www.linkedin.com/in/claudio-paul-bustos-rodríguez-395a0631a/"
                text="This Website was created by "
                ariaLabel="Visit the Linkedin profile of Claudio Bustos"
                textLink="Claudio Bustos"
            />
        </footer>
    );
}