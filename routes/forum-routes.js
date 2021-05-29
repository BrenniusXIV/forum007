const router = require('express').Router();
const {User} = require('../models');

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

router.get('/login', async (req, res) => {
    res.render('login', {forum});
});

router.get('/profile', async (req, res) => {
    //get user data from session
    const userData = await User.findOne({
        where: {
            id: req.session.user_id
        }
    });
    //serialize user data
    const user = userData.get({plain:true});
    //pass user to profile
    res.render('profile', {
        ...user,
        logged_in:true
    });
});

router.get('/views/forum.handlebars/:id', async (req, res) => {
    return res.render('forum', forum[req.params.id - 1]);
});

module.exports = router;