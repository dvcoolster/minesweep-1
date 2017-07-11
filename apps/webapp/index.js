var router = require('express').Router();
var gameController = require('./gameController');


/**
 * Define routes here:
 */
router.get('/', gameController.renderGamePage);


/**
 * module exports: default router
 */
module.exports = router;