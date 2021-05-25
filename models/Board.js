const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Board extends Model {}

Board.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        text: "the name of the board",
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "board",
},
);


module.exports = Board;