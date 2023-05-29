const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const Corte = new Schema ({

    numero      : {type:String, required: true},
    nome        : {type:String, required: true},
    valor       : {type:Number, required: true},
    descricao   : {type:String, required: true}
})


const CorteModel = mongoose.model('cortes', Corte);


module.exports = {CorteModel}