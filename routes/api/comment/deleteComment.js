module.exports = async function(req,res)
{
    const {Comment} = require('../../../models/Comment');

    try {
        const commentPost = await Comment.destroy(
        {
            where: { id: req.params.id }
        });

            res.status(200).json(commentPost);
    } catch (error)
    {
        res.status(500).json({"error":erro});
    }
    res.send("delete thread route");
}