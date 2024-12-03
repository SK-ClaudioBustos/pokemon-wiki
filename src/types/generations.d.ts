export interface GenerationData {
    id:  string;
    name: string;
}

export interface GenerationsList {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}