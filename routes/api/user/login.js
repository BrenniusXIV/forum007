module.exports = async function(req, res)

{
    const {User} = require('../../../models');
    try
    {
        
        const userData = await User.findOne(
        {
            where: { email: req.body.email }
        });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again'});
            return;
        }
        
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again'});
            return;
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

    } catch (error) {
        res.status(400).json(err);
    }
};