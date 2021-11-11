const router = require('express').Router(),
    { CommentController } = require('../controllers');

router.get('/', CommentController.get)
    .post('/', CommentController.create);

module.exports = router;