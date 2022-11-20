const express = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

const router = express();

router.use('/news', postRouter)
router.use('/user', userRouter);

module.exports = router;