//import models
const Board = require('./Board');
const Thread = require('./Thread');
const CommentSection = require('./CommentSection');
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

//thread has many comment sections
Thread.hasOne(CommentSection, {
    foreignKey: 'thread_id',
    onDelete: 'CASCADE'
});

//comment sections are children of thread
CommentSection.belongsTo(Thread, {
    foreignKey:'thread_id'
})

//comment section has many comments
CommentSection.hasMany(Comment, {
    foreignKey: 'comment_section_id',
    onDelete:'CASCADE'
});

//comments are children of comment section
Comment.belongsTo(CommentSection, {
    foreignKey: 'comment_section_id'
});

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    onDelete: 'CASCADE'
});

//comments are children of user
Comment.belongsTo(User, {
    foreignKey: 'commenter_id'
});



module.exports = { Board, Thread, CommentSection, Comment, User };