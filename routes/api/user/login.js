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
        };
    } catch (error) {
        res.status(400).json(err);
    }
};