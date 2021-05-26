module.exports = async function(req,res)
{
    // import models
    const {Board} = require('../../../models');
    
    try
    {
       const boardResults = await Board.create({
        ...req.body,
        user_id: 1,
        threads_id: 1,
        comments_id: 1,
        comments_section_id: 1,

    });
    //return board status/error
    res.status(200).json(boardResults);
    } catch (error) {
    console.log(error);
    res.status(500).json({"error,EEK!":error});
}

};