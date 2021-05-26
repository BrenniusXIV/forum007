module.exports = async function(req,res)
{
    //import models folder
    const {User} = require('../../../models');
    try
    {
        console.log("creating user!!");
        const userResults = await User.create({
            ...req.body,
        });
        //return thread results
        res.status(200).json(userResults);
    } catch (error) {
        console.log(error);
        res.status(500).json({"error":error});
    }
};