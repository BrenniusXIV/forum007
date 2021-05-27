module.exports = async function(req,res)
{
    const {Comment} = require('../../../models');

    try 
    {
        const commentPost = await Comment.update(  //.bypk
        {
            ...req.body, //delete
        },
        {
            where: { id: req.params.id } 
        });

        res.status(200).json(commentPost);
    } catch (error)
    {
        res.status(500).json({"error":error});
    }
};