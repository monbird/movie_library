export default class Helper {
    public static getAllPosters(poster: string): string[] {
        let data = [];
        const split = poster.split('.');
        for (let i = 0, tmp = split; i < 6; i++) {
            tmp[1] = (i + 1).toString();
            data[i] = tmp.join('.');
        }
        return data;
    }

    public static generateLink = (title2: string, year: number, id: number): string => 'https://www.filmweb.pl/film/' + encodeURI(title2) + '-' + year + '-' + id;
}