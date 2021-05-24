module.exports = async function(req,res)
{
    //import sequelize
    const Sequelize = require('sequelize');
    //create connection to mysql datatbase
    const sequelize = new Sequelize('mysql://beb8dda59d72ca:2e1a270b@us-cdbr-east-03.cleardb.com/heroku_9322c06e3acd475?reconnect=true');
    //create thread
    /*
    mysql://beb8dda59d72ca:2e1a270b@us-cdbr-east-03.cleardb.com/heroku_9322c06e3acd475?reconnect=true
    */

    //let initSequelize = new Sequelize( 'forum_db', 'root', '', {dialect :'postgres', port:'5432',schema:dbo});
    //import something mysql related
    res.send("create thread route");
}