//import router from express
const router = require('express').Router();

//require js folders
const board = require('./board');
const thread = require('./thread');
const commentsection = require('./commentsection');
const comment = require('./comment');
const user = require('./user');

//connect folders to router
router.use(board);
router.use(thread);
router.use(commentsection);
router.use(comment);
router.use(user);

//export router
module.exports = router;