const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const computerController = require('./controllers/computerController')
const harddriveController = require('./controllers/harddriveController')
const specController = require('./controllers/specController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})


app.get('/', (req, res) => {
    res.send("Jeremy's Computer Emporium! Let's sell some hardware!")
})

// Get All Routes - All
app.get('/harddrives', harddriveController.getAllHarddrives)

app.get('/computers', computerController.getAllComputers)

app.get('/specs', specController.getAllSpecs)


// CRUD Routes - Hard Drives
app.get('/harddrives/:id', harddriveController.getHarddriveById)

app.post('/harddrives/', harddriveController.createHarddrive)

app.put('/harddrives/:id', harddriveController.updateHarddrive)

app.delete('/harddrives/:id', harddriveController.deleteHarddrive)