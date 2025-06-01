const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User_Signal = sequelize.define(
  "User_Signal",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    signal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "signals",
        key: "id",
      },
    },
  },
  {
    tableName: "user_signals",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = User_Signal;
