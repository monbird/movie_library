const express = require('express');
const passport = require('passport');
const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/user', passport.authenticate('jwt', { session : false }), UserCtrl.createUser);
router.put('/user/:user_id', passport.authenticate('jwt', { session : false }), UserCtrl.updateUser);
router.delete('/user/:user_id', passport.authenticate('jwt', { session : false }), UserCtrl.deleteUser);
router.get('/user/:user_id', passport.authenticate('jwt', { session : false }), UserCtrl.getUserById);
router.get('/users', passport.authenticate('jwt', { session : false }), UserCtrl.getAllUsers);

router.post('/register', UserCtrl.createUser);
router.post('/signin', UserCtrl.signIn);

module.exports = router;
