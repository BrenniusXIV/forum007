const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Thread extends Model {}

Thread.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    thread_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    board_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "board",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    comments_section_id: {   //one thread to one comment section; many comments to one comments section
      type: DataTypes.INTEGER,
      references: {
        model: "comment_section",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "thread",
  }
);

module.exports = Thread;
