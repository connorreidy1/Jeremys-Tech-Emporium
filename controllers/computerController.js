const Computer = require('../models/computer')

const getAllComputers = async (req, res) => {
    try{
        const computers = await Computer.find()
        res.json(computers)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllComputers
}