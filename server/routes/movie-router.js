const express = require('express');
const MovieCtrl = require('../controllers/movie-ctrl');

const router = express.Router();

router.post('/user/:user_id/movie', MovieCtrl.createMovieOrSeries);
router.put('/user/:user_id/movie/:movie_id', MovieCtrl.updateMovieOrSeries);
router.delete('/user/:user_id/movie/:movie_id', MovieCtrl.deleteMovieOrSeries);
router.get('/user/:user_id/movie/:movie_id', MovieCtrl.getMovieOrSeriesById);
router.get('/user/:user_id/movies', MovieCtrl.getAllMovies);
router.get('/user/:user_id/series', MovieCtrl.getAllSeries);

module.exports = router;
