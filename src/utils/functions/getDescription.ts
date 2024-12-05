import { Color, PokemonSpecie } from "@types";

interface GeneralDescription {
    color: Color
    is_legendary: boolean
    entries: string[]
}

export const getDescription = (data: PokemonSpecie): GeneralDescription => {
    const entriesFiltered = data.flavor_text_entries.filter((entry) => entry.language.name === "en");
    const entries = entriesFiltered.slice(0, 5).map((entry) => entry.flavor_text.replace(/\n/g, " ").replace(/[\n↵]/g, "").replace(/\s+/g, " "));
    const descriptionData: GeneralDescription = {
        color: data.color,
        is_legendary: data.is_legendary,
        entries: entries.filter((entry, index, self) => self.findIndex((e) => e === entry) === index)
    };

    return descriptionData;
};
