import { EvolutionPokemonData } from "@util";

export const EvolutionItem = ({ evolution }: { evolution: EvolutionPokemonData }) => {
    return (
        <div key={evolution.id} className="evolution-item">
            <div>
                <img src={evolution.imgUrl} alt={`image of ${evolution.name}`} />
            </div>
            <div className="hidden-overlay">
                <p>{evolution.name}</p>
            </div>
        </div>
    );
}