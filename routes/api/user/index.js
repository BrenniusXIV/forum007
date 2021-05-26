//setup router
const router = require('express').Router();
//import js files performing the work on the route
const getUsers = require('./getUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
//connect the js files to the route
router.get("/user",getUsers);
router.post("/user",createUser);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);
//export router to 
module.exports = router;