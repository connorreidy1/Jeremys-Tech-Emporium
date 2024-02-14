const Harddrive = require('../models/harddrive')

const getAllHarddrives = async (req, res) => {
    try{
        const harddrives = await Harddrive.find()
        res.json(harddrives)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getHarddriveById = async(req,res) => {
    try {
        const{id} = req.params
        const harddrive = await Harddrive.findById(id)
        if (harddrive) {
            return res.json(harddrive)
        }
        return res.status(404).send('Hard Drive not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createHarddrive = async(req, res) => {
    try {
        const harddrive = await new Harddrive (req.body)
        await harddrive.save()
        return res.status(201).json({harddrive})
    }
    catch (e){
        return res.status(500).json({e: e.message})
    }
}

const updateHarddrive = async(req, res) => {
    try {
        let {id} = req.params
        let harddrive = await Harddrive.findByIdAndUpdate(id, req.body, {new: true})
        if (harddrive) {
            return res.status(200).json(harddrive)
        }
        throw new Error ("Hard Drive not found")
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteHarddrive = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await Harddrive.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Hard Drive deleted")
        }
        throw new Error("Hard Drive not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllHarddrives,
    getHarddriveById,
    createHarddrive,
    updateHarddrive,
    deleteHarddrive
}