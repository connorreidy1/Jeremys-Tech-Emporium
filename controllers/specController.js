const Spec = require('../models/spec')

const getAllSpecs = async (req, res) => {
    try{
        const specs = await Spec.find()
        res.json(specs)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllSpecs
}