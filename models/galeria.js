const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://visionmaster:z4FTm2RICqa2hnO7@barbertimedb.w8whwie.mongodb.net/reservas', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const GaleriasSchema = new Schema({
  nome: { type: String, required: true },
  imagem: { type: String, required: true }
});

const GaleriaModel = mongoose.model('Galerias', GaleriasSchema);

module.exports = { GaleriaModel };
