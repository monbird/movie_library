import Filmweb from "../Filmweb";
import {LiveSearchData} from "../interfaces/LiveSearch";
import Film from "../models/Film";

// test('getGenres', () => {
//     const obj = Filmweb.genres;
//     const genre = Filmweb.getGenre(2);
//     expect(genre).toBe("Animacja");
//     expect(obj[6]).toBe("Dramat");
// });

test('getFilmShortData', done => {
    const fw = new Filmweb();
    fw.getFilmShortData('Obcy').then((data: LiveSearchData) => {
        expect(data).toEqual({
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

test('getFilmInfoFull', done => {
    const fw = new Filmweb();
    fw.getFilmData(1048).then((result: Film) => {
        expect(result).toEqual({
            id: 1048,
            title: "Skazani na Shawshank",
            title2: "The Shawshank Redemption",
            rating: 8.78118,
            rateCount: 858602,
            genres: [
                "Dramat"
            ],
            year: 1994,
            minutes: 142,
            forumLink: "https://www.filmweb.pl/Skazani.Na.Shawshank/discussion",
            isReleasedInPoland: 1,
            isReleasedWorldly: 1,
            _posterLink: "/10/48/1048/6925401.2.jpg",
            trailerPosterLink: "https://1.fwcdn.pl/wv/26/92/12692/snap1.12692.1.jpg",
            trailerVideoLink: "https://mm.filmweb.pl/1048/the_shawshank_redemption___trailer.iphone.mp4",
            releaseWorldDate: "1994-09-10",
            releasePolandData: "1995-04-16",
            isSeries: 0,
            seasonCount: 0,
            episodesCount: 0,
            productionCountry: "USA",
            description: "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.",
            link: "https://www.filmweb.pl/film/The%20Shawshank%20Redemption-1994-1048",
            images: [
                "/10/48/1048/6925401.1.jpg",
                "/10/48/1048/6925401.2.jpg",
                "/10/48/1048/6925401.3.jpg",
                "/10/48/1048/6925401.4.jpg",
                "/10/48/1048/6925401.5.jpg",
                "/10/48/1048/6925401.6.jpg",
            ]
        });
        done();
    });
});