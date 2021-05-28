//setup router
const router = require('express').Router();
//import js files performing the work on the route
const getThreads = require('./getThreads');
const createThread = require('./createThread');
const updateThread = require('./updateThread');
const deleteThread = require('./deleteThread');
//connect the js files to the route
router.get("/thread",getThreads);
router.get("/thread/:id", getThreadById);
router.post("/thread",createThread);
router.put("/thread/:id",updateThread);
router.delete("/thread/:id",deleteThread);
//export router to 
module.exports = router;