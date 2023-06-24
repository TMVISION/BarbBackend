const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_HOST, { useNewUrlParser: true});

var Schema = mongoose.Schema;

const Funcionario = new Schema ({

    nome        : {type:String, required: true},
    cpf         : {type:String, required: true},
    cep         : {type:String, required: true},
    email       : {type:String, required: true},
    telefone    : {type:String, required: true},
    funcao      : {type:String, required: true},
    unidade     : {type:String, required: true},
    imagem      : {type:String},
    descricao   : {type:String},
    face        : {type:String},
    twitter     : {type:String},
    instagram   : {type:String}
})

const FuncionarioModel = mongoose.model('funcionarios', Funcionario);


module.exports = {FuncionarioModel}