module.exports = async function(_req,res)
 {
    const {Board} = require('../../../models');

    try
    {
        //delete board
      const boardResults = await Board.findAll();
        
      //return board status/error
      res.status(200).json(boardResults);
  } catch (error) {
      console.log(error);
      res.status(500).json({"error,EEK!":error});
    }
};