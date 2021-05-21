module.exports = async function(req,res)
{
    //import sequelize
    const Sequelize = require('sequelize');
    //create connection to mysql datatbase
    const sequelize = new Sequelize('mysql://root@localhost:3000/forum_db');
    //create thread

    //let initSequelize = new Sequelize( 'forum_db', 'root', '', {dialect :'postgres', port:'5432',schema:dbo});
    //import something mysql related
    res.send("create thread route");
}