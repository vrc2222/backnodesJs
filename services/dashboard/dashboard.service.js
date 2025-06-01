

const { Signal, User_Signal, User } = require("../../db/models");
// asegúrate que apunte bien al index.js de models

class DashBoardService {
  async getAllSignals() {
    return await Signal.findAll();
  }
  async assignSignalToUser(userId, signalId) {
    // evita duplicados
    const exists = await User_Signal.findOne({
      where: { user_id: userId, signal_id: signalId },
    });

    if (exists) {
      throw new Error("Esta señal ya fue asignada al usuario.");
    }

    return await User_Signal.create({
      user_id: userId,
      signal_id: signalId,
    });
  }

  async getUserSignal(identification) {
    const userSignals = await User.findAll({
      where: { identification },
      include: [Signal],
    });

    console.log("userSignals: ", userSignals[0].Signals);

    if (!userSignals || userSignals.length === 0) {
      throw new Error("No se encontraron señales para este usuario.");
    }

    // Devuelve solo las señales asociadas
    return userSignals[0].Signals; // "Signals" es el nombre por defecto del array
  }
}
module.exports = new DashBoardService();
