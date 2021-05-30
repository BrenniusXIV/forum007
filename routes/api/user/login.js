module.exports = async function(req, res)

{
    const {User} = require('../../../models');
<<<<<<< HEAD

    try
    {
=======
    console.log('import user');
    try
    {
        
>>>>>>> 4b49737ade8b25c4c68e3e4055edd1c03e12cb3f
        const userData = await User.findOne(
        {
            where: { email: req.body.email }
        });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again'});
            return;
        }
<<<<<<< HEAD

=======
        
        console.log(req.body.password);
>>>>>>> 4b49737ade8b25c4c68e3e4055edd1c03e12cb3f
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again'});
            return;
<<<<<<< HEAD
        };
=======
        }else
        {
            //update session id
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                
                res.status(200).json({ user: userData, message: 'You are now logged in!' });
            });
            return;
        }


>>>>>>> 4b49737ade8b25c4c68e3e4055edd1c03e12cb3f
    } catch (error) {
        res.status(400).json(err);
    }
};