const sequelize = require('../config/connection');
const { User, Thread, Comment, Board } = require('../models');

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

  let threadId = 1
  for (const thread of threadData) {
    thread.id = threadId++
    await Thread.bulkCreate([{
      ...thread,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    }]);
    await Comment.bulkCreate(commentData.map(comment => ({
      ...comment,
      thread_id: thread.id,
      commenter_id: users[Math.floor(Math.random() * users.length)].id,
    })))
  }

  process.exit(0);
};

seedDatabase();
