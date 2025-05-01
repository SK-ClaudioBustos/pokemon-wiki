import { GenerationsList } from "@types";
import { toCapitalize } from "@util";

export const getGenerationsOptions = async () => {
  try {
    const API_URL = `https://pokeapi.co/api/v2/generation/`;
    const response = await fetch(API_URL);
    const generationList: GenerationsList = await response.json();
    const generationOptions = generationList.results.map((generation) => {
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
    return generationOptions;
  } catch (error) {
    throw new Error("Failed to retrieve the Generation list from the API");
  }
};
