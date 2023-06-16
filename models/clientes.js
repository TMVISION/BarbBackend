const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://visionmaster:z4FTm2RICqa2hnO7@barbertimedb.w8whwie.mongodb.net/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;


const Clientes = new Schema ({

    nome        : {type:String, required: true},
    email       : {type:String, required: true},
    tel         : {type:String, required: true}
    
})

const ClienteModel = mongoose.model('clientes', Clientes)

module.exports = {ClienteModel}