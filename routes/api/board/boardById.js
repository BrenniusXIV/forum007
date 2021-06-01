module.exports = async function(req,res)
{
    const {Board} = require('../../../models');

    try{
        const boardResults = await Board.findByPk(
        {
            where: { id: req.params.id }
        });

        res.status(200).json(boardResults);
    } catch (error) {
        res.status(500).json({"error":error});
    }
};