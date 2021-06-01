module.exports = async function(req,res)
{
    //import models folder
    const {Thread} = require('../../../models');
    try
    {
        if (req.session.user_id) {
            const threadResults = await Thread.create({
                ...req.body,
                user_id: req.session.user_id,
            
            });
            //return thread results
            res.status(200).json(threadResults);
        } else {
            res.status(404).json({"login": "You must be logged in to post a thread."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"error":error});
    }

}