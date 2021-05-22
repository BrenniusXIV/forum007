/* IMPORT DEPENDENCIES */
//import custom env variables
require('.env').config({path: __dirname + '/.env'})
//import express
const express = require('express');
//import routes folder
const routes = require("./routes");

/* APP INITIATION */
//initiate app
let app = express();
//setup port number
const port = process.env.PORT || 3306;

/* ROUTE CONFIGURATION */
//set up the express app to handle incoming data payload
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect routes to app
app.use("/routes",routes);  //sometimes i'll call "/routes" -> "/apis" 
//setup port to listen on
app.listen(port, () => console.log(`App listening on PORT ${port}`));




// mysql://
// beb8dda59d72ca

// 2e1a270b

// us-cdbr-east-03.cleardb.com


const mysql = require('mysql');
const config = require('./config');
const ID = 'DbAgent:';

const connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'beb8dda59d72ca',
    password: '2e1a270b',
    database: 'Forum_007_DB',
    port: '3306',
    queueLimit : 0,
    connectionLimit : 0
 });


connection.connect(function(err) {
    if (err) throw err;
    else console.log(ID + 'now connected to Forum_DB');
});

module.exports = connection;