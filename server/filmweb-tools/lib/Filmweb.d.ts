import { LiveSearchData } from "./interfaces/LiveSearch";
import Film from "./models/Film";
export default class Filmweb {
    private static prepareQuery;
    getFilmData(filmId: number): Promise<Film>;
    getFilmShortData: (query: string) => Promise<LiveSearchData>;
    getLiveSearchData: (query: string) => Promise<LiveSearchData[]>;
}
