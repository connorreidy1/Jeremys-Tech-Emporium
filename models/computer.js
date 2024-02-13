const mongoose = require('mongoose')

const computerSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        brand: {type: String, required: true},
        description: {type: String, required: true},
        computerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Computer'},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Computer', computerSchema)