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
    {
        title: "SPECTRE"
    }
];

router.get('/', async (req, res) => {
    res.render('all', {forum});
});

router.get('/forum/:id', async (req, res) => {
    return res.render('forum', forum[req.params.id - 1]);
});

module.exports = router;