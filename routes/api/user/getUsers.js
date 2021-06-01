module.exports = async function(req,res)
{
    //import models folder
    const {User} = require('../../../models');
    //wrap dangerous code in try/catch
    try
    {
        //get users
        const userResults = await User.findAll();
        //return user results
        res.status(200).json(userResults);
    } catch (error)
    {
        //return error
        res.status(500).json({"error":error});
    }
};