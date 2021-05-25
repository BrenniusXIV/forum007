//import router
const router = require('express').Router();
//require routes
const api = require('./api');
//connect routes to router
router.use("/api",api);
//export router
module.exports = router;