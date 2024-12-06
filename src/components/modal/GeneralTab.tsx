import { useDataContext } from "@context";
import "@styles/GeneralTab.css";
import { Stat } from "@types";
import { getGeneralInformation, Loading } from "@util";
import { useState } from "react";

const pokemonTypes = {
    normal: ["#A8A77A", "#FFFFFF"],
    fighting: ["#C22E28", "#FFFFFF"],
    flying: ["#A98FF3", "#FFFFFF"],
    poison: ["#A33EA1", "#FFFFFF"],
    ground: ["#E2BF65", "#FFFFFF"],
    rock: ["#B6A136", "#FFFFFF"],
    bug: ["#A6B91A", "#FFFFFF"],
    ghost: ["#735797", "#FFFFFF"],
    steel: ["#B7B7CE", "#FFFFFF"],
    fire: ["#EE8130", "#FFFFFF"],
    water: ["#6390F0", "#FFFFFF"],
    grass: ["#7AC74C", "#FFFFFF"],
    electric: ["#F7D02C", "#FFFFFF"],
    psychic: ["#F95587", "#FFFFFF"],
    ice: ["#96D9D6", "#FFFFFF"],
    dragon: ["#6F35FC", "#FFFFFF"],
    dark: ["#705746", "#FFFFFF"],
    fairy: ["#D685AD", "#FFFFFF"],
    stellar: ["#FFD700", "#000000"],
    unknown: ["#68A090", "#FFFFFF"],
};

export const GeneralTab = () => {
    const { generalData: data, loadingGeneralData: loading, errorGeneralData: error } = useDataContext();
    const [showShiny, setShowShniy] = useState(false);

    if (loading) {
        return <div className="container-center details-loading" style={{ height: "100%" }}>
            <Loading descripcion="Loading Pokemón Data" />
        </div>;
    }

    if (error) {
        return <><h1>Unknow Error</h1></>
    }

    if (!data) {
        return <>Nothing to Show</>;
    }

    const pokemonData = getGeneralInformation(data);
    return (
        <div>
            <div className="details-content">
                <div className="details-img">
                    <button style={{ "--shiny-color": showShiny ? "#fce024" : "#c1c1c1" } as React.CSSProperties} onClick={() => setShowShniy(!showShiny)} className="shiny-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1f1f1">
                            <path
                                style={{ stroke: "#fff", strokeWidth: "1" }}
                                d="M11.081 5.141c.347-.807 1.491-.807 1.838 0l1.274 2.97a1 1 0 00.828.601l3.218.295c.875.08 1.229 1.168.568 1.748l-2.43 2.13a1 1 0 00-.316.972l.714 3.152c.194.857-.732 1.53-1.487 1.08l-2.776-1.653a1 1 0 00-1.024 0l-2.776 1.653c-.755.45-1.681-.223-1.487-1.08l.715-3.152a1 1 0 00-.317-.973l-2.43-2.13c-.66-.579-.307-1.667.568-1.747l3.218-.295a1 1 0 00.828-.601l1.274-2.97z" />
                        </svg>
                    </button>
                    <img src={showShiny ? pokemonData.img.shiny : pokemonData.img.normal} alt={`image of ${pokemonData.name}`} />
                </div>
                <div className="details-pokemon">
                    <div className="details-stats">
                        <ul>
                            {
                                pokemonData.stats.map((stat: Stat, index) => (
                                    <li key={index}>
                                        <p>{`${stat.stat.name.toUpperCase().replace("-", " ")}`}</p>
                                        <meter min="0" max="255" value={stat.base_stat}></meter>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="details-types">
                        {
                            pokemonData.types.map((type) => (
                                <div
                                    key={type.type.name}
                                    style={{
                                        "--j": pokemonTypes[type.type.name.toLocaleLowerCase() as keyof typeof pokemonTypes][0],
                                        "--k": pokemonTypes[type.type.name.toLocaleLowerCase() as keyof typeof pokemonTypes][1],
                                    } as React.CSSProperties}
                                    className="pokemon-type">
                                    <span>{type.type.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <p style={{ textAlign: "center", margin: "0 5px 10px" }}>You can switch to the shiny version by clicking on the star.</p>
        </div>
    );
}