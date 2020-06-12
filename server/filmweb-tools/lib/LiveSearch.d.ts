import { LiveSearchData } from "./interfaces/LiveSearch";
export default class LiveSearch {
    static URL: string;
    /**
     * Zwraca tablice elementów z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */
    static search(query: string): Promise<LiveSearchData[]>;
    /**
     * Zwraca pierwszy element z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */
    static searchFirst(query: string): Promise<LiveSearchData>;
}
