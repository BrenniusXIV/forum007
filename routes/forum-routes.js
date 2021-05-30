const router = require("express").Router();
const { Board, Thread, Comment, User } = require("../models");


router.get("/", async (req, res) => {
  try {
    const boardsResult = await Board.findAll()

    const boards = boardsResult.map((board) => board.get({plain:true}));
    res.render("all", {
      boards,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json({ "err": err });
  }
});

router.get("/board/:id", async (req, res) => {
  try {
    const threadsResult = await Thread.findAll({
      where: {board_id: req.params.id},
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });
    const threads = threadsResult.map((thread) => thread.get({plain:true}));
    res.render("board", {
      threads,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ "err": err });
  }
});



module.exports = router;
