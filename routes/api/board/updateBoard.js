module.exports = async function(_req,res)
 {
    const {Board} = require('../../../models');

    try
    {
        //delete board
  //update user
  const userResults = await Board.update(
    {
        ...req.body,
        // user_id: 1,
        // threads_id: 1,
        // comments_id: 1,
        // comments_section_id: 1,
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