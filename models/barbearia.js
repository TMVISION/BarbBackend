const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_HOST, { useNewUrlParser: true});

var Schema = mongoose.Schema;


const Barbearias = new Schema ({

    unidade     : {type:String, required: true},
    localizacao : {type:String, required: true},
    imagem      : {type:String, required: true}
    
})

const BarbeariaModel = mongoose.model('barbearias', Barbearias)

module.exports = {BarbeariaModel}