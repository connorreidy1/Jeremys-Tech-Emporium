const db = require('../db')
const { Harddrive } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const harddrives = [
        {
            name: 'Lacie 1TB Rugged',
            brand: 'Lacie',
            capacity: '1 TB',
            make_year: 2023,
            storage_type: 'HDD',
            interface: 'Type-C',
            max_speed: '130 MB/s',
            model_num: 'STFR1000800',
            price: 84.99
        },
        {
            name: 'Lacie 2TB Rugged',
            brand: 'Lacie',
            capacity: '2TB',
            make_year: 2023,
            storage_type: 'HDD',
            interface: 'Type-C',
            max_speed: '130 MB/s',
            model_num: 'STFR2000800',
            price: 109.99
        },
        {
            name: 'Lacie 2TB Rugged SSD',
            brand: 'Lacie',
            capacity: '2TB',
            make_year: 2023,
            storage_type: 'SSD',
            interface: 'Type-C',
            max_speed: '1050 MB/s',
            model_num: 'STMF2000400',
            price: 219.99
        },
        {
            name: 'WD 5TB Elements Portable',
            brand: 'Western Digital',
            capacity: '5TB',
            make_year: 2023,
            storage_type: 'HDD',
            interface: 'USB 3.0',
            max_speed: '5000 MB/s',
            model_num: 'WDBU6Y0050BBK-WESN',
            price: 129.99
        },
        {
            name: 'SanDisk 2TB Extreme Portable SSD V2',
            brand: 'SanDisk',
            capacity: '2TB',
            make_year: 2023,
            storage_type: 'SSD',
            interface: 'Type-C',
            max_speed: '1050 MB/s',
            model_num: 'SDSSDE61-2T00-G25',
            price: 169.99
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