const mongoose = require('mongoose')

const computerSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        brand: {type: String, required: true},
        description: {type: String, required: true},
        img_path: {type: String, required: true},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Computer', computerSchema)