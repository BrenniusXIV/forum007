//import router
const router = require('express').Router();
//require routes
const api = require('./api');
const forumRoutes = require('./forum-routes')
//connect routes to router
router.use("/api",api);
router.use(forumRoutes);
//export router
module.exports = router;