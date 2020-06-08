const express = require('express');
const ImdbCtrl = require('../controllers/imdb-ctrl');

const router = express.Router();

router.post('/titles', ImdbCtrl.getImdbTitles);
router.get('/title/:id', ImdbCtrl.getImdbTitleDetails);

module.exports = router;
