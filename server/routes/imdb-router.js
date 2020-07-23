const express = require('express');
const passport = require('passport');
const ImdbCtrl = require('../controllers/imdb-ctrl');

const router = express.Router();

router.post('/titles', passport.authenticate('jwt', { session : false }), ImdbCtrl.getImdbTitles);
router.get('/title/:id', passport.authenticate('jwt', { session : false }), ImdbCtrl.getImdbTitleDetails);

module.exports = router;
