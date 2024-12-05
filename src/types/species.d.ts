/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonSpecie {
    base_happiness: number;
    capture_rate: number;
    color: Color;
    egg_groups: Color[];
    evolution_chain: EvolutionChainUrl;
    evolves_from_species: null;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genus[];
    generation: Color;
    growth_rate: Color;
    habitat: Color;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: SpeciesName[];
    order: number;
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexNumber[];
    shape: Color;
    varieties: Variety[];
}

export interface Color {
    name: string;
    url: string;
}

export interface EvolutionChainUrl {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: Color;
    version: Color;
}

export interface Genus {
    genus: string;
    language: Color;
}

export interface SpeciesName {
    language: Color;
    name: string;
}

export interface PalParkEncounter {
    area: Color;
    base_score: number;
    rate: number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex: Color;
}

export interface Variety {
    is_default: boolean;
    pokemon: Color;
}
