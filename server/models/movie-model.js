const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        title: {type: String, required: true, minlength: 2},
        genre: {type: String},
        country: {type: String},
        year: {type: Number, min: 1800, max: 2500},
        runtime: {type: String},
        language: {type: String},
        cast: {type: String},
        director: {type: String},
        comments: {type: String},
        type: {type: String, enum: ['movie', 'series']},
        is_watched: {type: Boolean},
        imdb_id: {type: String},
        rating_imdb: {type: Number, min: 0, max: 10},
        rating_rt: {type: Number, min: 0, max: 100},
        rating_fw: {type: Number, min: 0, max: 10},
        filmweb_url: {type: String},
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
