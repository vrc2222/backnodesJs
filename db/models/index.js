const User = require("./User");
const Signal = require("./Signal"); // 👈 importa tu modelo Signal
const User_Signal = require("./User_Signal");

User.belongsToMany(Signal, {
  through: User_Signal,
  foreignKey: "user_id",
  otherKey: "signal_id",
});

Signal.belongsToMany(User, {
  through: User_Signal,
  foreignKey: "signal_id",
  otherKey: "user_id",
});

module.exports = {
  User,
  Signal,
  User_Signal,
};
