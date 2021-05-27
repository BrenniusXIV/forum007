module.exports = async function(req,res)
{
    const {Comment} = require('../../../models');

    try {
        const commentPost = await Comment.destroy(
        {
            where: { id: req.params.id }
        });

        if (!commentPost) {
            res.status(404).json({ message: 'No comment found for id!'});
            return;
        }

        res.status(200).json(commentPost);
    } catch (error)
    {
        res.status(500).json({"error":error});
    }
    // res.send("delete thread route");
};