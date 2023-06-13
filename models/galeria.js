const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const GaleriasSchema = new Schema({
  nome: { type: String, required: true },
  imagem: { type: String, required: true }
});

const GaleriaModel = mongoose.model('Galerias', GaleriasSchema);

module.exports = { GaleriaModel };
