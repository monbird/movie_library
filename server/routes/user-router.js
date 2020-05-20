const express = require('express');
const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/user', UserCtrl.createUser);
router.put('/user/:user_id', UserCtrl.updateUser);
router.delete('/user/:user_id', UserCtrl.deleteUser);
router.get('/user/:user_id', UserCtrl.getUserById);
router.get('/users', UserCtrl.getAllUsers);

module.exports = router;
