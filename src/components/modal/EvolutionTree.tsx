import "@styles/EvolutionTree.css";
import { EvolutionPokemonData } from "@util";

type Color = `#${string}`;

const PhaseColorSchema: Color[] = [
    "#0C0",
    "#00C",
    "#C00",
];

export const EvolutionTree = ({ evolutions }: { evolutions: EvolutionPokemonData[][] }) => {
    return (
        <div className="evolution-container">
            {
                evolutions.map((level, index) => {
                    const phaseColor = PhaseColorSchema[index];
                    return (
                        <div className="phase-level" key={index}>
                            <h3 style={{ color: phaseColor }}>{`Phase ${index + 1}`}</h3>
                            <div className="phase-items">
                                {
                                    level.map((item) => (
                                        <EvolutionItem evolution={item} color={phaseColor} key={item.id} />
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

const EvolutionItem = ({ evolution, color }: { evolution: EvolutionPokemonData, color: Color }) => {
    return (
        <div style={{ "--c": color } as React.CSSProperties} key={evolution.id} className="evolution-item">
            <div>
                <img src={evolution.imgUrl} alt={`image of ${evolution.name}`} />
            </div>
            <div className="hidden-overlay">
                <p>{evolution.name}</p>
            </div>
        </div>);
}