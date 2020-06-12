import {LiveSearchData, LiveSearchResponse} from "../interfaces/LiveSearch";
import Helper from "../Helper";

export class LiveSearchResponseModel implements LiveSearchResponse {
    private type: string;       // f - film, s - serial, g - gra
    private id: number;         // number id na filmwebie
    private poster: string;     // poster typu 6
    private title: string;      // tytuł angielski
    private title2: string;     // tytuł polski
    private title3: string;     // inny tytuł
    private year: number;       // rok produkcji
    private starsStr: string;   // 2 głównych aktorów w postaci tekstu

    private readonly _data: LiveSearchData;

    constructor(...args: any[]) {
        [
            this.type,
            this.id,
            this.poster,
            this.title,
            this.title2,
            this.title3,
            this.year,
            this.starsStr
        ] = args;
        this._data = this.fetchData();
    }

    private fetchData(): LiveSearchData {
        return new LiveSearchDataModel(
            this.id,
            this.type,
            Helper.getAllPosters(this.poster),
            Helper.generateLink(this.title2, this.year, this.id),
            this.starsStr.split(', '),
            this.title,
            this.title2,
            this.year
        );
    }

    public getData(): LiveSearchData {
        return this._data;
    }
}

export class LiveSearchDataModel implements LiveSearchData {
    id: number;
    type: string;
    images: string[];
    link: string;
    stars: string[];
    title: string;
    title2: string;
    year: number;

    constructor(id: number, type: string, images: string[], link: string, stars: string[], title: string, title2: string, year: number) {
        this.id = id;
        this.type = type;
        this.images = images;
        this.link = link;
        this.stars = stars;
        this.title = title;
        this.title2 = title2;
        this.year = year;
    }
}