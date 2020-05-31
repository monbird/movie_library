const User = require('../models/user-model');
const Movie = require('../models/movie-model').model;

createMovieOrSeries = async (req, res) => {
    const body = req.body;

    await User.findOne({_id: req.params.user_id}, (error, user) => {
        if (error || !user) {
            return res.status(404).json({
                success: false,
                message: 'User not found!',
                error
            });
        }

        const movie = new Movie(body);

        user.movies.push(movie);

        user.save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    message: 'Movie created!',
                    data: movie
                });
            })
            .catch(error => {
                return res.status(400).json({
                    success: false,
                    message: 'Movie not created!',
                    error
                });
            });
    });
}

updateMovieOrSeries = async (req, res) => {
    const body = req.body;

    await User.findOneAndUpdate({"_id": req.params.user_id, "movies._id": req.params.movie_id},
    {
        $set: {
            'movies.$.title': body.title,
            'movies.$.genre': body.genre,
            'movies.$.country': body.country,
            'movies.$.year': body.year,
            'movies.$.runtime': body.runtime,
            'movies.$.language': body.language,
            'movies.$.cast': body.cast,
            'movies.$.director': body.director,
            'movies.$.comments': body.comments,
            'movies.$.type': body.type,
            'movies.$.is_watched': body.is_watched,
            'movies.$.imdb_id': body.imdb_id,
            'movies.$.rating_imdb': body.rating_imdb,
            'movies.$.rating_rotten_tomatoes': body.rating_rotten_tomatoes,
            'movies.$.rating_filmweb': body.rating_filmweb,
            'movies.$.poster': body.poster,
        },
    },
    { 
        runValidators: true
    },
    (error, user) => {
        if (error && error.name == 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Movie not updated!',
                error
            });
        } else if (error || !user) {
            return res.status(404).json({
                success: false,
                message: 'User or movie not found!',
                error
            });
        } else {
            return res.status(200).json({
                success: true,
                message: 'Movie updated!',
                data: user.movies.filter(movie => movie._id == req.params.movie_id)[0]
            });
        }
    });
}

deleteMovieOrSeries = async (req, res) => {
    await User.findOneAndUpdate({"_id": req.params.user_id, "movies._id": req.params.movie_id}, 
    {
        $pull: {
            'movies': {
                "_id": req.params.movie_id
            }
        }
    },
    (error, user) => {
        if (error || !user) {
            return res.status(404).json({
                success: false,
                message: 'User or movie not found!',
                error
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Movie deleted!',
            data: user.movies.filter(movie => movie._id == req.params.movie_id)[0]
        });
    })
}

getMovieOrSeriesById = async (req, res) => {
    await User.findOne(
        {
            "_id": req.params.user_id,
            "movies._id": req.params.movie_id
        },
        {
            'movies': {
                $elemMatch: {
                    '_id': req.params.movie_id,
                }
            }
        },
        (error, user) => {
            if (error || !user) {
                return res.status(404).json({
                    success: false,
                    message: 'User or movie not found!',
                    error
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Movie found!',
                data: user.movies[0]
            });
    });
}

getAllMovies = async (req, res) => {
    await User.findOne(
        {
            "_id": req.params.user_id,
        },
        (error, user) => {
            if (error || !user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found!',
                    error
                });
            }

            let movies = user.movies.filter((movie) => movie.type === 'movie');
            if(movies.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: 'Movies found!',
                    data: movies
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'No movies found!',
                    data: []
                });
            }
    });
}

getAllSeries = async (req, res) => {
    await User.findOne(
        {
            "_id": req.params.user_id,
        },
        (error, user) => {
            if (error || !user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found!',
                    error
                });
            }

            let series = user.movies.filter((movie) => movie.type === 'series');
            if(series.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: 'Series found!',
                    data: series
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'No series found!',
                    data: []
                });
            }
    });
}

module.exports = {
    createMovieOrSeries,
    updateMovieOrSeries,
    deleteMovieOrSeries,
    getMovieOrSeriesById,
    getAllMovies,
    getAllSeries
};
