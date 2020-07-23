const express = require('express');
const passport = require('passport');
const MovieCtrl = require('../controllers/movie-ctrl');

const router = express.Router();

router.post('/user/:user_id/movie', passport.authenticate('jwt', { session : false }), MovieCtrl.createMovieOrSeries);
router.put('/user/:user_id/movie/:movie_id', passport.authenticate('jwt', { session : false }), MovieCtrl.updateMovieOrSeries);
router.delete('/user/:user_id/movie/:movie_id', passport.authenticate('jwt', { session : false }), MovieCtrl.deleteMovieOrSeries);
router.get('/user/:user_id/movie/:movie_id', passport.authenticate('jwt', { session : false }), MovieCtrl.getMovieOrSeriesById);
router.get('/user/:user_id/movies', passport.authenticate('jwt', { session : false }), MovieCtrl.getAllMovies);
router.get('/user/:user_id/series', passport.authenticate('jwt', { session : false }), MovieCtrl.getAllSeries);

module.exports = router;
