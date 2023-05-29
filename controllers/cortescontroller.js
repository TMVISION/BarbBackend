const Corte = require("../models/cortes.js");

exports.getCorte = async (req, res) => {
  try {
    const cortes = await Corte.CorteModel.find();
    res.json(cortes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCorteId = async (req, res) => {
  try {
    res.status(201).json(await Corte.CorteModel.findById(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCorte = async (req, res) => {
  try {
    res.status(201).json(await Corte.CorteModel.create(req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCorte = async (req, res) => {
  try {
    res
      .status(201)
      .json(await Corte.CorteModel.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCorte = async (req, res) => {
  try {
    res.status(201).json(await Corte.CorteModel.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
