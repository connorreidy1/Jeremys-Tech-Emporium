const mongoose = require('mongoose')

const specSchema = new mongoose.Schema(
    {
        chip: {type: String, required: true},
        memory: {type: String, required: true},
        size_in_inches: {type: String, required: true},
        year: {type: String, required: true},
        computerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Computer'},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Spec', specSchema)