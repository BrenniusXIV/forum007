const router = require("express").Router();
const { Board, Thread, Comment, User } = require("../models");
const forum = [
  {
    id: 1,
    thread_name: "Gaming",
  },
  {
    id: 2,
    thread_name: "Crypto",
  },
  {
    id: 3,
    thread_name: "General",
  },
  {
    id: 4,
    thread_name: "Programming",
  },
  {
    title: "SPECTRE",
  },
];

router.get("/", async (req, res) => {
  res.render("all", { forum });
});

router.get("/board/:id", async (req, res) => {
  try {
    const threadsResult = await Thread.findAll({
      where: {board_id: req.params.id},
    });
    const threads = threadsResult.map((thread) => thread.get({plain:true}));
    res.render("board", {
      threads,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json({ err: err });
  }
});
router.get("/views/forum.handlebars/:id", async (req, res) => {
  return res.render("forum", forum[req.params.id - 1]);
});

module.exports = router;
