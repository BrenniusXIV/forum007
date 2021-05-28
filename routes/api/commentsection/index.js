//setup router
const router = require('express').Router();
//import js files performing the work on the route
const getCommentSections = require('./getCommentSections');
const createCommentSection = require('./createCommentSection');
const updateCommentSection = require('./updateCommentSection');
const deleteCommentSection = require('./deleteCommentSection');
//connect the js files to the route
router.get("/commentsection",getCommentSections);
router.post("/commentsection",createCommentSection);
router.put("/commentsection/:id",updateCommentSection);
router.delete("/commentsection/:id",deleteCommentSection);
//export router to 
module.exports = router;