const sequelize = require('../config/connection');
const { User, Thread, Comment, CommentSection, Board } = require('../models');

const userData = require('./userData.json');
const boardData = require('./boardData.json');
const threadData = require('./threadData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const boards = await Board.bulkCreate(boardData, {
    individualHooks: true,
    returning: true,
  });

  let commentSectionId = 1
  let commentId = 1
  let threadId = 1
  for (const thread of threadData) {
    thread.id = threadId++
    const commentSection = {
      id: commentSectionId,
      thread_id: thread.id
    }
    await Thread.bulkCreate([{
      ...thread,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    }]);
    await CommentSection.bulkCreate([commentSection])
    await Comment.bulkCreate(commentData.map(comment => ({
      ...comment,
      comment_section_id: commentSection.id,
      commenter_id: users[Math.floor(Math.random() * users.length)].id,
    })))
    commentSectionId++
  }

  process.exit(0);
};

seedDatabase();
