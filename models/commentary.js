const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    score: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    enumId: {
        type: Number,
        required: true
    }
}, {timestamps: true, collection: 'comments'});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;