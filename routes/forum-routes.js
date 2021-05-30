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

<<<<<<< HEAD
=======
router.get('/profile', async (req, res) => {
    //get user data from session
    try {
        if (req.session.logged_in === true) {
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
        } else {
            res.send(`You must be logged in to view your profile.`)
        }
    } catch (err) {
        res.status(500).json({"error": err})
    }
});

>>>>>>> 4b49737ade8b25c4c68e3e4055edd1c03e12cb3f
router.get('/views/forum.handlebars/:id', async (req, res) => {
    return res.render('forum', forum[req.params.id - 1]);
});

module.exports = router;