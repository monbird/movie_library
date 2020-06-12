import Helper from "../Helper";

// @TODO: zmiana nazwy
export default class Film {
    id: number;
    title: string;
    title2: string;
    rating: number;
    rateCount: number;
    genres: string[];
    year: number;
    minutes: number;
    forumLink: string;
    isReleasedInPoland: boolean;
    isReleasedWorldly: boolean;
    images: string[];
    private _posterLink: string;
    trailerPosterLink: string;
    trailerVideoLink: string;
    releaseWorldDate: string;
    releasePolandData: string;
    isSeries: boolean;
    seasonCount: number;
    episodesCount: number;
    productionCountry: string;
    description: string;
    link: string;

    constructor(...args: any[]) {
        [
            this.id,
            this.title,
            this.title2,
            this.rating,
            this.rateCount,
            this.genres,
            this.year,
            this.minutes,
            this.forumLink,
            this.isReleasedInPoland,
            this.isReleasedWorldly,
            this._posterLink,
            this.trailerPosterLink,
            this.trailerVideoLink,
            this.releaseWorldDate,
            this.releasePolandData,
            this.isSeries,
            this.seasonCount,
            this.episodesCount,
            this.productionCountry,
            this.description
        ] = args;

        this.images = Helper.getAllPosters(this._posterLink);
        this.link = Helper.generateLink(this.title2, this.year, this.id);
    }
}