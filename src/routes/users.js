const router = require('express').Router(),
    { UserController } = require('../controllers');

router.get('/', UserController.get)
    .get('/:id', UserController.show)
    .post('/', UserController.create);

module.exports = router;