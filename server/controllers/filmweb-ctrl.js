const Filmweb = require('../filmweb-tools').default;
const filmweb = new Filmweb();

getFilmwebRating = async (req, res) => {
    const body = req.body;

    if(!body.title) {
        return res.status(400).json({
            success: false,
            message: 'You must provide a title!'
        });
    }

    filmweb.getLiveSearchData(body.title)
    .then((result) => {
        let thisMovie = null;

        let matchingMoviesByTitle = [];
        for(let i = 0; i < result.length; i++) {
            if(result[i].title.toLowerCase() === body.title.toLowerCase() || result[i].title2.toLowerCase() === body.title.toLowerCase()) {
                matchingMoviesByTitle.push(result[i]);
            }
        }

        if(matchingMoviesByTitle.length == 1) {
            thisMovie = matchingMoviesByTitle[0];
        }

        let matchingMoviesByCast = [];
        if(!thisMovie && body.cast) {
            let cast = body.cast.split(',').map(star => star.trim().toLowerCase());
            for(let i = 0; i < matchingMoviesByTitle.length; i++) {
                let movie = matchingMoviesByTitle[i];
                if(!movie.stars) {
                    continue;
                }
                let movieStars = movie.stars.map(star => star.trim().toLowerCase());
                if(movieStars && cast.indexOf(movieStars[0]) >= 0) {
                    matchingMoviesByCast.push(movie);
                }
            }
        }

        if(matchingMoviesByCast.length == 1) {
            thisMovie = matchingMoviesByCast[0];
        } else if(!matchingMoviesByCast.length) {
            matchingMoviesByCast = matchingMoviesByTitle;
        }

        if(!thisMovie && body.year) {
            for(let i = 0; i < matchingMoviesByCast.length; i++) {
                let movie = matchingMoviesByCast[i];
                if(movie.year && movie.year == body.year) {
                    thisMovie = movie;
                    break;
                }
            }
        }

        if(!thisMovie && matchingMoviesByCast.length > 0) {
            thisMovie = matchingMoviesByCast[0];
        }
  
        if(thisMovie) {
            filmweb.getFilmData(thisMovie.id)
            .then(result => {
                return res.status(200).json({
                    success: true,
                    message: 'Title found!',
                    data: result
                });
            })
            .catch(error => {
                return res.status(404).json({
                    success: false,
                    message: 'Title not found!'
                });
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Title not found!'
            });
        }
    })
    .catch(error => {
        return res.status(404).json({
            success: false,
            message: 'Title not found!'
        });
    });
}


module.exports = {
    getFilmwebRating
};
