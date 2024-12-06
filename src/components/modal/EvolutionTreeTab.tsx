import { useDataContext } from "@context";
import { Error, getEvolutions, Loading } from "@util";
import { EvolutionTree } from "./EvolutionTree";

export const EvolutionTreeTab = () => {
    const { evolutionData: data, loadingEvolutionData: loading, errorEvolutionData: error } = useDataContext();

    if (loading) {
        return <div className="container-center" style={{ height: "100%" }}>
            <Loading descripcion="Loading Evolution Tree" color="#3e3d3d" />
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

    const evolutions = getEvolutions(data);

    return (
        <section>
            <EvolutionTree evolutions={evolutions} />
        </section>
    );
}