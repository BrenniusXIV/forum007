module.exports = async function(req,res)
{
    //import models folder
    const {User} = require('../../../models');
    //wrap dangerous code in try/catch
    try
    {
        //delete user
        const userResults = await User.destroy(
        { 
            where: { id: req.params.id }    //get user id from params
        });
        //return user results
        res.status(200).json(userResults);
    } catch (error)
    {
        //return error
        res.status(500).json({"error":error});
    }
};