const express = require('express');
const passport = require('passport');
const FilmwebCtrl = require('../controllers/filmweb-ctrl');

const router = express.Router();

router.post('/title', passport.authenticate('jwt', { session : false }), FilmwebCtrl.getFilmwebRating);

module.exports = router;
