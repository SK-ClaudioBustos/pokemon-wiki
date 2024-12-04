import { GenerationsList } from "@types";
import { toCapitalize } from "./capitalize";

export const getGenerationData = (data: GenerationsList) => {
    return data.results.map((generation) => {
        const id = generation.url.split("/").slice(-2, -1)[0];
        const name = generation.name.split("-").reduce((result, word, index) => {
            if (index === 0) {
                // Capitalizar el primer segmento
                return toCapitalize(word);
            } else {
                // Convertir los siguientes segmentos a mayúsculas y agregarlos con un espacio
                return `${result} ${word.toUpperCase()}`;
            }
        }, "");
        return { id, name };
    });
}