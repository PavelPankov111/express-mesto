const router = require('express').Router();
const { getUsers, postUsers, getUsersId } = require('../controllers/users');

router.get('/users', getUsers);

router.post('/users', postUsers);

router.get('/users/:id', getUsersId);

module.exports = router;
