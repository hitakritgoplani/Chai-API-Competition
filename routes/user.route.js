const router = require('express').Router();
const {createUser, getUser, getFollowers, } = require('../controllers/user.controller');

router.post('/', createUser);

router.get('/', getUser);

router.get('/', getFollowers);

module.exports = router;