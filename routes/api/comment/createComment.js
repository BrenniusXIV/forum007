module.exports = async function(req,res)
{
    //import models folder
    const {Comment} = require('../../../models');
    try
    {
        const commentPost = await Comment.create({
            ...req.body,
            // comment_section_id: 1,
        });
        //return thread results
        res.status(200).json(commentPost);
    } catch (error) {
        // console.log(error);
        res.status(500).json({"error":error});
    }

}