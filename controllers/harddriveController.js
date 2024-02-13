const Harddrive = require('../models/harddrive')

const getAllHardrives = async (req, res) => {
    try{
        const harddrives = await Harddrive.find()
        res.json(harddrives)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllHardrives
}