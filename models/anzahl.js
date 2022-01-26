const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zahlenSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    anzahl: {
        type: Number,
        required: true
    }
}, {collection: 'Anzahl'});

const Anzahl = mongoose.model('Anzahl', zahlenSchema);
module.exports = Anzahl;