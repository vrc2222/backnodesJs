const models = require("../../db/models");
const bcrypt = require("bcrypt");

class UserDb {
    async authenticate(params) {
        console.log(params);
        const user = await models.User.findOne({
            where: {
                identification: params.identification
            },
        });
        if (!user) {
            return null; // usuario no encontrado
        }
        const passwordMatch = await bcrypt.compare(params.password, user.password);
        if (!password) {
            return null; // contraseña incorrecta
        }
        return user;
    }
}

module.exports = UserDb