const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_HOST, { useNewUrlParser: true});

var Schema = mongoose.Schema;

const Servico = new Schema ({

    numero      : {type:String, required: true},
    nome        : {type:String, required: true},
    valor       : {type:Number, required: true},
    imagem      : {type:String, required: true},
    descricao   : {type:String, required: true}
})


const ServicoModel = mongoose.model('servicos', Servico);


module.exports = {ServicoModel}