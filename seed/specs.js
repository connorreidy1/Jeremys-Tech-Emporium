const db = require('../db')
const { Computer, Spec } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const macBookPro = await Computer.findOne({ name: 'Mac Book Pro' }) 
    const macBookAir = await Computer.findOne({ name: 'Mac Book Air' }) 
    const surfacePro = await Computer.findOne({ name: 'Surface Pro 9' }) 
    const aspireIntel = await Computer.findOne({ name: 'Aspire Intel' }) 

    const specs = [
        {
            chip: 'string',
            memory: 'string',
            size_in_inches: 'string',
            year: 'string',
            price: 'number',
            computerId: macBookPro._id
        },
        {
            chip: 'string',
            memory: 'string',
            size_in_inches: 'string',
            year: 'string',
            price: 'number',
            computerId: macBookAir._id
        },
        {
            chip: 'string',
            memory: 'string',
            size_in_inches: 'string',
            year: 'string',
            price: 'number',
            computerId: surfacePro._id
        },
        {
            chip: 'string',
            memory: 'string',
            size_in_inches: 'string',
            year: 'string',
            price: 'number',
            computerId: aspireIntel._id
        },
    ]
    await Spec.insertMany(specs)
    console.log('Inserted specs')
}

const run = async() => {
    await main()
    db.close()
}
  
run()