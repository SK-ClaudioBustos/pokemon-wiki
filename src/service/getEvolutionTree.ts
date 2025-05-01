import { EvolutionChain } from "@types";

export const getEvolutionTree = async (
  evolutionChainUrl: string
): Promise<EvolutionChain> => {
  try {
    const evolutionChainId = evolutionChainUrl.split("/").slice(-2, -1)[0];
    const API_EVOLUTION = `https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}/`;
    const response = await fetch(API_EVOLUTION);
    const result: EvolutionChain = await response.json();
    return result;
  } catch (error) {
    throw new Error("");
  }
};
