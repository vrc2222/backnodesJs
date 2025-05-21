const UserService = require("./user.service");

function validateUser(req, res, next) {
  new UserService()
    .validateUser(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error al validar el usuario" });
    });
}

function create(req, res, next) {
  new UserService()
    .create(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error al crear el usuario" });
    });
}

function getUsersByRole(req, res, next) {
  new UserService()
    .getUsersByRole()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error al cargar usuarios por rol" });
    });
}
function deleteUser(req, res, next) {
  new UserService()
    .deleteUser(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error al eliminar el usuario" });
    });
}
module.exports = {
  validateUser,
  create,
  getUsersByRole,
  deleteUser,
};
