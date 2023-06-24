const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_HOST, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const GaleriasSchema = new Schema({
  nome: { type: String, required: true },
  imagem: { type: String, required: true }
});

const GaleriaModel = mongoose.model('Galerias', GaleriasSchema);

module.exports = { GaleriaModel };
