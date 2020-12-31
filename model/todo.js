const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {type: String, required: true},
    isCompleted: {
        type: Boolean,
        default: false
    },
    createDate: {
        type: Date,
        default: Date.now
    }
})

const list = mongoose.model('list', todoSchema);

module.exports = list;