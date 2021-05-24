const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CommentSection extends Model {}

CommentSection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        thread_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "thread",
                key: "id",
            },
        },
        created_at: {
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
    modelName: "comment_section",
    }
);

module.exports = CommentSection;