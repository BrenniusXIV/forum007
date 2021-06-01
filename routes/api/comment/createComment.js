module.exports = async function(req,res)
{
    //import models folder
    const {Comment} = require('../../../models');
    try
    {   if (req.session.user_id) {
            const commentPost = await Comment.create({
                ...req.body,
                commenter_id: req.session.user_id,
            });
            //return thread results
            res.status(200).json(commentPost);
        } else {
            res.status(404).json({"login": "You must be logged in to post a comment."})
        }
    } catch (error) {
        // console.log(error);
        res.status(500).json({"error":error});
    }

}