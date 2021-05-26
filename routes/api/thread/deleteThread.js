

module.exports = async function(req,res)
{
    const { Thread } = require("../../../models");
    try {
    const threadData = await Thread.destroy({
        where: {
            ...req.body,
            user_id: 1,
            comment_section_id: 1,
            board_id: 1,
        },
      });
  
      if (!threadData) {
        res.status(404).json({ message: 'No thread found with this id!' });
        return;
      }
  
      res.status(200).json(threadData);
    } catch (err) {
      res.status(500).json(err);
    }
}





   

