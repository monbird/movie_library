const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        title: {type: String, required: true, minlength: 2},
        genre: {type: String},
        country: {type: String},
        year: {type: String},
        runtime: {type: String},
        language: {type: String},
        cast: {type: String},
        director: {type: String},
        comments: {type: String},
        type: {type: String, enum: ['movie', 'series']},
        is_watched: {type: Boolean},
        imdb_id: {type: String},
        rating_imdb: {type: String},
        rating_rt: {type: String},
        rating_filmweb: {type: String},
        poster: {type: String},
        platform: {type: String},
        plot: {type: String}
    },
    { timestamps: true },
);

module.exports = {
    'model': mongoose.model('movies', Movie),
    'schema': Movie
};
