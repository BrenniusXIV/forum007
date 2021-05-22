/* IMPORT DEPENDENCIES */
const express = require('express');
const session = require('express-session');
const expresshandlebars = require('express-handlebars');
const routes = require("./routes");

//configure sequelize connection
const sequelize = require('./config/connection');
//connect sequelize to session stuff
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
//setup port number
const port = process.env.PORT || 4040;

//startup handlebars
const handlebars = expresshandlebars.create();

//setup session tracking
const sess = {
    secret: "better have my money",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
}
app.use(session(sess));


//set up the express app to handle incoming data payload
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make app use handlebars
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

/* ROUTE CONFIGURATION */
//connect routes to app
app.use(routes);  //sometimes i'll call "/routes" -> "/apis" 
//setup port to listen on
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`App listening on PORT ${port}`));
})


// mysql://
// beb8dda59d72ca

// 2e1a270b

// us-cdbr-east-03.cleardb.com



// const ID = 'DbAgent:';

// const connection = mysql.createConnection({
//     host: 'us-cdbr-east-03.cleardb.com',
//     user: 'beb8dda59d72ca',
//     password: '2e1a270b',
//     database: 'Forum_007_DB',
//     port: '3306',
//     queueLimit : 0,
//     connectionLimit : 0
//  });


// connection.connect(function(err) {
//     if (err) throw err;
//     else console.log(ID + 'now connected to Forum_DB');
// });
