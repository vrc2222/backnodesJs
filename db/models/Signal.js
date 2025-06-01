const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Signal = sequelize.define(
  "Signal",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
      allowNull: false,
    },
    time_signal: {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("ECG", "EEG", "EMG"),
      allowNull: false,
    },
  },
  {
    tableName: "signals",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Signal;
