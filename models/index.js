//import models
const Board = require('./boards');
const Thread = require('./Thread');
const CommentSection = require('./CommentSection');
const Comment = require('./Comment');
const User = require('./User');

//board has many threads
Board.hasMany(Thread, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

//threads are children of board
Thread.belongsTo(Board, {
    foreignKey: 'id',
});

//thread has many comment sections
Thread.hasMany(CommentSection, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

//comment sections are children of thread
CommentSection.belongsTo(Thread, {
    foreignKey:'id'
})

//comment section has many comments
CommentSection.hasMany(Comment, {
    foreignKey: 'id',
    onDelete:'CASCADE'
});

//comments are children of comment section
Comment.belongsTo(CommentSection, {
    foreignKey: 'id'
});

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

//comments are children of user
Comment.belongsTo(User, {
    foreignKey: 'id'
});



module.exports = { Board, Thread, CommentSection, Comment, User };