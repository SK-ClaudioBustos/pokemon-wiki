import { useDataContext } from "@context";
import "@styles/DescriptionTab.css";
import { getDescription, Loading } from "@util";
import React from "react";

export const DescriptionTab = () => {
    const { descriptionData: data, loadingDescriptionData: loading, errorDescriptionData: error } = useDataContext();

    if (loading) {
        return <div className="container-center details-loading" style={{ height: "100%" }}>
            <Loading descripcion="Loading Pokemón Description" />
        </div>;
    }

    if (error) {
        return <><h1>Unknow Error</h1></>
    }

    if (!data) {
        return <>Nothing to Show</>;
    }

    const descriptions = getDescription(data);

    return (
        <div className="descriptions-container">
            <div className="description-type">
                <span style={{ "--i": descriptions.is_legendary ? "#EA12A2" : "#6C6964" } as React.CSSProperties}>
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