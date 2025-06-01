const DashBoardService = require("./dashboard.service");

class DashBoardController {
  async getAllSignals(req, res) {
    try {
      const signals = await DashBoardService.getAllSignals();
      res.status(200).json(signals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async assignSignal(req, res) {
    try {
      const { user_id, signal_id } = req.body;
      const result = await DashBoardService.assignSignalToUser(
        user_id,
        signal_id
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserSignal(req, res) {
    try {
      const { identification } = req.body;
      const result = await DashBoardService.getUserSignal(identification);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new DashBoardController();
