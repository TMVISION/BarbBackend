const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://visionmaster:z4FTm2RICqa2hnO7@barbertimedb.w8whwie.mongodb.net/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;


const Usuarios = new Schema ({

    nome            : {type:String, required: true},
    email           : {type:String, required: true},
    role            : {type: String, enum: ['cliente', 'admin', 'funcionario'], default: 'cliente' },
    senha           : {type:String, required: true},
    token           : {type:String, required: true},
    nsessao         : {type:String, required: true}
    
})

const UsuarioModel = mongoose.model('usuarios', Usuarios)

module.exports = {UsuarioModel}