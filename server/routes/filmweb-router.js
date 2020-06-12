const express = require('express');
const FilmwebCtrl = require('../controllers/filmweb-ctrl');

const router = express.Router();

router.post('/title', FilmwebCtrl.getFilmwebRating);

module.exports = router;
