module.exports = async function(req,res)
{
    //import models folder
    const {User} = require('../../../models');
    //wrap dangerous code in try/catch
    try
    {
        const checkUsername = await User.findAll(
            {
                where: {user_name: req.body.user_name},
                attributes: {exclude: ['password', 'email', 'id']}
            }
        );

        const checkEmail = await User.findAll(
            {
                where: {email: req.body.email},
                attributes: {exclude: ['password', 'user_name', 'id']}
            }
        );
        if (checkUsername.length === 0 && checkEmail.length === 0) {
        //create user
            const userResults = await User.create({
                ...req.body,
            },
            {
                individualHooks: true,
            });
            //return user results
            res.status(200).json(userResults);
        } else {
            res.status(409).json({"message": "Username or e-mail address is already taken.",  "username?": checkUsername, "email?": checkEmail})
        }
    } catch (error)
    {
        //return error
        res.status(500).json({"error":error});
    }
};