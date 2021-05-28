//import models
const Board = require('./Board');
const Thread = require('./Thread');
const Comment = require('./Comment');
const User = require('./User');

//board has many threads
Board.hasMany(Thread, {
    foreignKey: 'board_id',
    onDelete: 'CASCADE'
});

//threads are children of board
Thread.belongsTo(Board, {
    foreignKey: 'board_id',
});

//thread has many comments
Thread.hasMany(Comment, {
    foreignKey: 'thread_id',
    onDelete: 'CASCADE'
});

//comments are children of thread
Comment.belongsTo(Thread, {
    foreignKey:'thread_id'
})

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    onDelete: 'CASCADE'
});

//user has many threads
User.hasMany(Thread, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//comments are children of user
Comment.belongsTo(User, {
    foreignKey: 'commenter_id'
});



module.exports = { Board, Thread, Comment, User };