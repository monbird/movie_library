import LiveSearch from "../LiveSearch";
import {LiveSearchData} from "../interfaces/LiveSearch";

test('LiveSearch.search(Obcy)', done => {
    LiveSearch.search('Obcy').then((data: LiveSearchData[]) => {
        expect(data[0]).toEqual({
            id: 980,
            type: "f",
            images: [
                "/09/80/980/7518072.1.jpg",
                "/09/80/980/7518072.2.jpg",
                "/09/80/980/7518072.3.jpg",
                "/09/80/980/7518072.4.jpg",
                "/09/80/980/7518072.5.jpg",
                "/09/80/980/7518072.6.jpg"
            ],
            link: "https://www.filmweb.pl/film/Obcy%20-%208.%20pasa%C5%BCer%20%22Nostromo%22-1979-980",
            stars: [
                "Sigourney Weaver",
                "Tom Skerritt"
            ],
            title: "Alien",
            title2: "Obcy - 8. pasażer \"Nostromo\"",
            year: 1979,
        });
        done();
    });
});

test('LiveSearch.search(The Shawshank Redemption)', done => {
    LiveSearch.search('The Shawshank Redemption').then((data: LiveSearchData[]) => {
        expect(data[0]).toEqual({
            id: 1048,
            type: "f",
            images: [
                "/10/48/1048/6925401.1.jpg",
                "/10/48/1048/6925401.2.jpg",
                "/10/48/1048/6925401.3.jpg",
                "/10/48/1048/6925401.4.jpg",
                "/10/48/1048/6925401.5.jpg",
                "/10/48/1048/6925401.6.jpg"
            ],
            link: "https://www.filmweb.pl/film/The%20Shawshank%20Redemption-1994-1048",
            stars: [
                "Tim Robbins",
                "Morgan Freeman"
            ],
            title: "Skazani na Shawshank",
            title2: "The Shawshank Redemption",
            year: 1994
        });
        done();
    });
});
