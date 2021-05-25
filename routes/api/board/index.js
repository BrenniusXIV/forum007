//setup router
const router = require('express').Router();
//import js files performing the work on the route
const getBoards = require('./getBoards');
const createBoard = require('./createBoard');
const updateBoard = require('./updateBoard');
const deleteBoard = require('./deleteBoard');
//connect the js files to the route
router.get("/board",getBoards);
router.post("/board",createBoard);
router.put("/board/:id",updateBoard);
router.delete("/board/:id",deleteBoard);
//export router to 
module.exports = router;