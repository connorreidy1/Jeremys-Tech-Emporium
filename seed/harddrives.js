const db = require('../db')
const { Harddrive } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const harddrives = [
        {
            name: 'string',
            brand: 'string',
            capacity: 'string',
            make_year: 'number',
            storage_type: 'string',
            interface: 'string',
            max_speed: 'string',
            model_num: 'string',
            price: 'number'
        },
    ]
    await Harddrive.insertMany(harddrives)
    console.log('Inserted harddrives')
}

const run = async() => {
    await main()
    db.close()
}
  
run()