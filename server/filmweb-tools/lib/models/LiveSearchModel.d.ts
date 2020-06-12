import { LiveSearchData, LiveSearchResponse } from "../interfaces/LiveSearch";
export declare class LiveSearchResponseModel implements LiveSearchResponse {
    private type;
    private id;
    private poster;
    private title;
    private title2;
    private title3;
    private year;
    private starsStr;
    private readonly _data;
    constructor(...args: any[]);
    private fetchData;
    getData(): LiveSearchData;
}
export declare class LiveSearchDataModel implements LiveSearchData {
    id: number;
    type: string;
    images: string[];
    link: string;
    stars: string[];
    title: string;
    title2: string;
    year: number;
    constructor(id: number, type: string, images: string[], link: string, stars: string[], title: string, title2: string, year: number);
}
