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
    private _posterLink;
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
    constructor(...args: any[]);
}
