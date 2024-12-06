import "@styles/EvolutionTree.css";
import { EvolutionPokemonData } from "@util";
import { EvolutionItem } from "./EvolutionItem";

export const EvolutionTree = ({ evolutions }: { evolutions: EvolutionPokemonData[][] }) => {
    return (
        <div className="evolution-container">
            {
                evolutions.map((level, index) => {
                    return (
                        <div className="phase-level" key={index}>
                            <h3>{`Phase ${index + 1}`}</h3>
                            <div className="phase-items">
                                {
                                    level.map((item) => (
                                        <EvolutionItem evolution={item} key={item.id} />
                                    ))
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

