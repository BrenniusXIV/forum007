

module.exports = async function(req,res)
{
    const { Thread } = require("../../../models");
    try {
    const threadResults = await Thread.destroy(
      {
        where: { id: req.params.id }
      });
  
      if (!threadResults) {
        res.status(404).json({ message: 'No thread found with this id!' });
        return;
      }
  
      res.status(200).json(threadResults);
    } catch (err) {
      res.status(500).json(err);
    }
}





   

