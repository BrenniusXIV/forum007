//import router from express
const router = require('express').Router();

//require js folders
const board = require('./board');
const thread = require('./thread');

//connect folders to router
router.use(board);
router.use(thread);

//export router
module.exports = router;