module.exports = async function(req,res)
{
    const {Thread} = require('../../../models');
    try
    { 
        const threadResults =await Thread.update(
            ...req.body,
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(threadResults);
    } catch (error)
    {
        res.status(500).json({"error":error});
    }
};        
    
