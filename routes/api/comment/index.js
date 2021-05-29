//setup router
const router = require('express').Router();
//import js files performing the work on the route
const getComments = require('./getComments');
const getCommentById = require('./commentById');
const createComment = require('./createComment');
const updateComment = require('./updateComment');
const deleteComment = require('./deleteComment');
//connect the js files to the route
router.get("/comment",getComments);
router.get("/comment/:id", getCommentById);
router.post("/comment",createComment);
router.put("/comment/:id",updateComment);
router.delete("/comment/:id",deleteComment);
//export router to 
module.exports = router;