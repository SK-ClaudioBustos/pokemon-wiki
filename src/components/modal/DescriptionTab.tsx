import { useDataContext } from "@context";
import "@styles/DescriptionTab.css";
import { Error, getDescription, Loading } from "@util";
import React from "react";

export const DescriptionTab = () => {
    const { descriptionData: data, loadingDescriptionData: loading, errorDescriptionData: error } = useDataContext();

    if (loading) {
        return <div className="container-center details-loading" style={{ height: "100%" }}>
            <Loading descripcion="Loading Pokemón Description" color="#3e3d3d" />
        </div>;
    }

    if (error) {
        return <Error error={error} />;
    }

    if (!data) {
        return (
            <div className="container-center" style={{ height: "100%" }}>
                <h1>Nothing to Show</h1>
            </div>
        );
    }

    const descriptions = getDescription(data);

    return (
        <div className="descriptions-container">
            <div className="description-type">
                <span style={{ "--i": descriptions.is_legendary ? "#EA12A2" : "#c1c1c1" } as React.CSSProperties}>
                    {
                        descriptions.is_legendary ? "Legendary Pokémon" : "Common Pokémon"
                    }
                </span>
            </div>
            <ul className="description-list">
                {
                    descriptions.entries.map((entrie, index) => (
                        <li key={index}>
                            {entrie}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}