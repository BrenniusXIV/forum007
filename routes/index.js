//setup router
const router = require('express').Router();
//import js files performing the work on the route
const getForums = require('./getForums');
const createForum = require('./createForum');
const updateForum = require('./updateForum');
const deleteForum = require('./deleteForum');
//connect the js files to the route
router.get("/forum",getForums);
router.post("/forum",createForum);
router.put("forum",updateForum);
router.delete("forum",deleteForum);
//export router to 
module.exports = router;