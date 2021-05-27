const Sequelize = require('sequelize');

let sequelize;

if (process.env.CLEARDB_URL){
    sequelize = new Sequelize(process.env.CLEARDB_URL);
} else { 
    
    sequelize = new Sequelize(process.env.DB_URI);
}

module.exports = sequelize;


// module.exports = {
//     mysql: {
//         host: 'us-cdbr-east-03.cleardb.com',
//         user: 'beb8dda59d72ca',
//         password: '2e1a270b',
//         database: 'Forum_007_DB',
//         port: '3306',
//         queueLimit : 0,
//         connectionLimit : 0,
//     },
//     SQLthreadMap: {
//         insert: 'INSERT INTO posts(id, title, tweet, userid) VALUES(NULL,?,?,?)',
//         update: 'update posts set title=?, tweet=? where id=?',
//         delete: 'delete from posts where id=',
//         queryById: 'select * from posts where id=',
//         queryByUserId: 'select * from posts where userid=',
//         queryAll: 'select * from posts',
//         queryByParams: 'select * from posts where title like ? and tweet like ?',
//         queryByTitle: 'select * from posts where title like ?',
//     },
//     SQLuserMap: {
//         insert: 'INSERT INTO user(id, name_firstlast, username, password_user, email, create_date) VALUES(?,?)',
//         queryById: 'select * from user where id=?',
//         queryByCred: 'select * from user where name=? and password=?',
//     }
// };  SQLcommentMap: {


// }