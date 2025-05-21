const models = require("../../db/models");
const bcrypt = require("bcrypt");

class UserDb {
  async authenticate(params) {
    const user = await models.User.findOne({
      where: {
        identification: params.identification,
        role: "ADMIN",
        is_active: true,
      },
    });

    if (!user) {
      const error = new Error("Usuario no encontrado");
      error.status = 401;
      throw error;
    }

    const passwordMatch = await bcrypt.compare(params.password, user.password);

    if (!passwordMatch) {
      const error = new Error("Contraseña incorrecta");
      error.status = 401;
      throw error;
    }
    return user;
  }

  async create(params) {
    const hashedPassword = await bcrypt.hash(params.password, 10);
    params.password = hashedPassword;
    const user = await models.User.create(params);
    if (!user) {
      const error = new Error("Error al crear el usuario");
      error.status = 500;
      throw error;
    }
    return user;
  }
  async getUsersByRole() {
    return await models.User.findAll({
      where: {
        role: "USER",
        is_active: true,
      },
    });
  }
  async deleteUser(req) {
    console.log("🧪 ID recibido:", req.body.id);
    const user = await models.User.findOne({
      where: {
        id: req.body.id,
        is_active: true,
      },
    });
    if (!user) {
      const error = new Error("Usuario no encontrado");
      error.status = 401;
      throw error;
    }
    user.is_active = false;
    return user.save();
  }
}

module.exports = UserDb;
