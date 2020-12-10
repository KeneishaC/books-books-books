const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const crochetSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },

    projectTime: {
        type: Number,
        required: true
    },

    description: {
        type: String, 
        required: true
    }

})


module.exports = mongoose.model('Crochet', crochetSchema)