module.exports = async function(req,res)
{

    const {Thread} = require('../../../models');
    console.log('import thread')
    try
    {
        const threadResults = await Thread.findAll();
      
        //return thread results
        res.status(200).json(threadResults);
    } catch (error) {
        console.log(error);
        res.status(500).json({"error":error});
    }

}


   
     




