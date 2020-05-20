const express = require('express');
const MovieCtrl = require('../controllers/movie-ctrl');

const router = express.Router();

router.post('/user/:user_id/movie', MovieCtrl.createMovie);
router.put('/user/:user_id/movie/:movie_id', MovieCtrl.updateMovie);
router.delete('/user/:user_id/movie/:movie_id', MovieCtrl.deleteMovie);
router.get('/user/:user_id/movie/:movie_id', MovieCtrl.getMovieById);
router.get('/user/:user_id/movies', MovieCtrl.getAllMovies);

module.exports = router;
