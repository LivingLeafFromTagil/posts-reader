const express = require('express');
const postController = require('../controllers/postController');

const router = express();

router.get('/:id', postController.getPost);
router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.delete('/:id', postController.deletePost);

module.exports = router;