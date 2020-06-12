export interface LiveSearchResponse {
    getData(): LiveSearchData;
}
export interface LiveSearchData {
    id: number;
    type: string;
    title: string;
    title2: string;
    images: string[];
    year: number;
    link: string;
    stars: string[];
}
