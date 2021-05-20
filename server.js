/* IMPORT DEPENDENCIES */
//import custom env variables
require('dotenv').config({path: __dirname + '/.env'})
//import express
const express = require('express');
//import routes folder
const routes = require("./routes");

/* APP INITIATION */
//initiate app
let app = express();
//setup port number
const port = process.env.PORT || 3000;

/* ROUTE CONFIGURATION */
//set up the express app to handle incoming data payload
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect routes to app
app.use("/routes",routes);  //sometimes i'll call "/routes" -> "/apis" 
//setup port to listen on
app.listen(port, () => console.log(`App listening on PORT ${port}`));
