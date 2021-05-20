const router = require('express').Router();

const forum = [
    {
        id: 1,
        thread_name: 'Gaming',
    },
    {
        id: 2,
        thread_name: 'Crypto',
    },
    {
        id: 3,
        thread_name: 'General',
    },
    {
        id: 4,
        thread_name: 'Programming',
    },
];

router.get('/', async (req, res) => {
    res.render('all', {forum});
});

router.get('/forum/:num', async (req, res) => {
    return res.render('forum', forum[req.params.num - 1]);
});

module.exports = router;