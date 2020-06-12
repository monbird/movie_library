export interface LiveSearchResponse {
    getData(): LiveSearchData;
}

export interface LiveSearchData {
    id: number;         // number id na filmwebie
    type: string;       // f - film, s - serial, g - gra
    title: string;      // tytuł angielski
    title2: string;     // tytuł polski
    images: string[];   // 6 typów postera
    year: number;       // rok produkcji
    link: string;       // link do strony na filmwebie
    stars: string[];    // 2 głównych aktorów
}