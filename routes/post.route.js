const router = require('express').Router();
const {createPost, deletePost, getPostsByUser} = require('../controllers/post.controller');

router.post('/', createPost);

router.delete('/', deletePost);

router.get('/', getPostsByUser);

module.exports = router;