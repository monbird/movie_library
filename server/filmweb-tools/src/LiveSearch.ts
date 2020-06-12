import axios from "axios";
import {LiveSearchResponseModel} from "./models/LiveSearchModel";
import {LiveSearchData} from "./interfaces/LiveSearch";

// @TODO: standaryzacja errorów dla api filmwebu
export default class LiveSearch {
    static URL = 'http://www.filmweb.pl/search/live?q=';

    /**
     * Zwraca tablice elementów z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */
    public static search(query: string): Promise<LiveSearchData[]> {
        return new Promise<LiveSearchData[]>((resolve, reject) => {
            axios.get(LiveSearch.URL + encodeURI(query)).then(result => {
                try {
                    resolve(result.data.split('\\a').map((record: string) => {
                        const data: any[] = record.split('\\c');
                        data[1] = parseInt(data[1]);
                        data[6] = parseInt(data[6]);
                        return new LiveSearchResponseModel(...data).getData();
                    }));
                } catch (err) {
                    reject(new Error(err))
                }
            }).catch(err => {
                throw err;
            });
        });
    }

    /**
     * Zwraca pierwszy element z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */
    public static searchFirst(query: string): Promise<LiveSearchData> {
        return new Promise<LiveSearchData>((resolve, reject) => {
            axios.get(LiveSearch.URL + encodeURI(query)).then(result => {
                try {
                    resolve(result.data.split('\\a').slice(0, 1).map((record: string) => {
                        const data: any[] = record.split('\\c');
                        data[1] = parseInt(data[1]);
                        data[6] = parseInt(data[6]);
                        return new LiveSearchResponseModel(...data).getData();
                    })[0]);
                } catch (err) {
                    reject(new Error(err))
                }
            }).catch(err => {
                console.log(query);
                throw err;
            });
        });
    }
}

