const mongoose = require('mongoose');
const Movie = require('./movie-model').schema;

const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: {
            type: String,
            required: 'Username is required',
            minlength: 3,
            maxlength: 30
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            minlength: 5,
            maxlength: 60,
            required: 'Email address is required'
        },
        password: {
            type: String,
            required: 'Password is required'
        },
        movies: {
            type: [Movie]
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('users', User);
