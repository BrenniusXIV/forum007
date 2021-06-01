module.exports = async function(req,res)
{
  //import models folder
  const {Board} = require('../../../models');
 
  try
  {
      //delete board
      const boardResults = await Board.destroy(
      { 
          where: { 
            id: req.params.id,
        }   
      });
    //return board status/error
    res.status(200).json(boardResults);
} catch (error) {
    console.log(error);
    res.status(500).json({"error,EEK!":error});
  }
};