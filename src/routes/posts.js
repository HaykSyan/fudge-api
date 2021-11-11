const router = require('express').Router(),
    { PostController } = require('../controllers');

router.get('/', PostController.get)
    .get('/:id', PostController.show)
    .delete('/:id', PostController.delete)
    .post('/', PostController.create);

module.exports = router;