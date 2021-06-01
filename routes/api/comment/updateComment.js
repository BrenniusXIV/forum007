module.exports = async function(req,res)
{
    const {Comment} = require('../../../models');

    try 
    {   
        if (req.session.user_id) {
            const commentPost = await Comment.update( 
            {
                ...req.body,
            },
            {
                where: { id: req.params.id } 
            });

            res.status(200).json(commentPost);
        } else {
            res.status(404).json({"login": "You must be logged in to update a comment."})
        }
    } catch (error)
    {
        res.status(500).json({"error":error});
    }
};
