//setup router
const router = require('express').Router();
//import js files performing the work on the route
const getUsers = require('./getUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const login = require('./login');
const logout = require('./logout');
//connect the js files to the route
router.get("/user",getUsers);
router.post("/user",createUser);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);
router.post("/login",login);
router.delete("/logout",logout);
//export router to 
module.exports = router;