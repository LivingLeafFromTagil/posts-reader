const express = require('express');
const userController = require('../controllers/userController');

const router = express();

router.get('/:id', userController.getUser);
router.get('/:id/subs', userController.getSubs);
router.delete('/:id', userController.deleteUser);

module.exports = router;