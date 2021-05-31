const Sequelize = require('sequelize');

let sequelize;

if (process.env.CLEARDB_URL){
    sequelize = new Sequelize(process.env.CLEARDB_URL);
} else { 
    
    sequelize = new Sequelize(process.env.DB_URI);
}

module.exports = sequelize;
