const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    }
}, {timestamps: true});

const Route = mongoose.model('route', routeSchema);
module.exports = Route;