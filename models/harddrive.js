const mongoose = require('mongoose')

const harddriveSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        brand: {type: String, required: true},
        capacity: {type: String, required: true},
        make_year: {type: Number, required: true},
        storage_type: {type: String, required: true},
        intergace: {type: String, required: true},
        max_speed: {type: String, required: true},
        model_num: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Harddrive', harddriveSchema)