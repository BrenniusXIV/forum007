module.exports = async function(req,res)
{
    //import models folder
    const {Thread} = require('../../../models');
    try
    {
        const threadResults = await Thread.create({
            ...req.body,
            user_id: 1,
            comments_section_id: 1,
            board_id: 1,
        });
        //return thread results
        res.status(200).json(threadResults);
    } catch (error) {
        console.log(error);
        res.status(500).json({"error":error});
    }

}