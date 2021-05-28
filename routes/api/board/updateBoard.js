module.exports = async function(req,res)
 {
    const {Board} = require('../../../models');

    try
    {
        
  //update user
  const boardResults = await Board.update(
    {
        ...req.body,
    },
    { 
         where: { 
             id: req.params.id,
            //     user_id: req.session.user_id,
            //  threads_id: req.session.thead_id,
            //  comments_id: req.session.comments_id,
            //  comments_section_id: req.session.comments_section_id,
    
            }    
    });
          //return board status/error
      res.status(200).json(boardResults);
  } catch (error) {
      console.log(error);
      res.status(500).json({"error,EEK!":error});
    }
 };