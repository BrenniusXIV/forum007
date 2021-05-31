module.exports = async function(req,res)
{
    const {User} = require('../../../models');

    try
    {
        const userResults = await User.findByPk(
        {
            where: { id: req.params.id }
        });

        res.status(200).json(userResults);
    } catch (error) {
        res.status(500).json({"errror":error});
    }

}