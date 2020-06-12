import MD5 from 'crypto-js/md5';
import axios from "axios";
// import genres from './static/genres.json';

import Config from "./Config";
import {LiveSearchData} from "./interfaces/LiveSearch";
import LiveSearch from "./LiveSearch";
import Film from "./models/Film";

export default class Filmweb {
    // // @TODO: ogarnąć typ genres
    // static get genres(): string[] {
    //     return genres;
    // }
    //
    // public static getGenre = (id: number): string => genres[id];

    private static prepareQuery(method: string): string {
        const signature = Config.APP_VERSION + "," + MD5(method + "\\n" + Config.APPID + Config.APP_KEY);

        return "methods=" + encodeURI(method + "\\n")
            + "&signature=" + encodeURI(signature)
            + "&version=" + encodeURI(Config.APP_VERSION)
            + "&appId=" + encodeURI(Config.APPID);
    }

    // @TODO: standaryzacja errorów dla api filmwebu
    public getFilmData(filmId: number): Promise<Film> {
        return new Promise((resolve, reject) => {
            axios.get(
                Config.API_SERVER +
                Filmweb.prepareQuery("getFilmInfoFull [" + filmId + "]")
            ).then(result => {
                const [status, data] = result.data.split('\n');
                const json = JSON.parse(data.replace(/t:.*/, ''));
                resolve(new Film(...[
                    filmId,                         // id
                    json[0] == null ? "" : json[0], // title1
                    json[1] == null ? "" : json[1], // title2
                    json[2],                        // rating
                    json[3],                        // rateCount
                    json[4].split(','),     // genres
                    json[5],                        // year
                    json[6],                        // minutes
                    json[8],                        // forumLink
                    json[9],                        // isReleasedInPoland
                    json[10],                       // isReleasedWorldly
                    json[11],                       // posterLink
                    json[12][0] == undefined ? "" : json[12][0], // trailerPosterLink
                    json[12][1] == undefined ? "" : json[12][1], // trailerVideoLink
                    json[13],   // releaseWorldDate
                    json[14],   // releasePolandData
                    json[15],   // isSeries
                    json[16],   // seasonCount
                    json[17],   // episodesCount
                    json[18],   // productionCountry
                    json[19]    //description
                ]));
            });
        });
    }

    public getFilmShortData = (query: string): Promise<LiveSearchData> => LiveSearch.searchFirst(query);
    public getLiveSearchData = (query: string): Promise<LiveSearchData[]> => LiveSearch.search(query);
}