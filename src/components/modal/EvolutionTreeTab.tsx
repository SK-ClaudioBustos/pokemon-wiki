import { useDataContext } from "@context";
import { getEvolutions, Loading } from "@util";
import { EvolutionTree } from "./EvolutionTree";

export const EvolutionTreeTab = () => {
    const { evolutionData: data, loadingEvolutionData: loading, errorEvolutionData: error } = useDataContext();

    if (loading) {
        return <div className="container-center" style={{ height: "100%" }}>
            <Loading descripcion="Loading Evolution Tree" />
        </div>;
    }

    if (error) {
        return <><h1>Unknow Error</h1></>
    }

    if (!data) {
        return <div className="container-center" style={{ height: "100%" }}>
            Nothing to Show
        </div>;
    }

    const evolutions = getEvolutions(data);

    return (
        <section>
            <EvolutionTree evolutions={evolutions} />
        </section>
    );
}