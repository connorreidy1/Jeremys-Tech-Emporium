const db = require('../db')
const { Computer } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const computers = [
        {
            name: 'MacBook Pro',
            brand: 'Apple',
            description: 'Powerful, premium laptop with high-performance processors, stunning Retina display, and versatile Thunderbolt ports for professional users.'
        },
        {
            name: 'MacBook Air',
            brand: 'Apple',
            description: 'Sleek, lightweight laptop with long battery life, vibrant Retina display, and ultra-portable design, perfect for everyday computing tasks.'
        },
        {
            name: 'Surface Pro 9',
            brand: 'Microsoft',
            description: 'Versatile, portable 2-in-1 device with powerful performance, stunning PixelSense display, and innovative Surface Pen support for creativity.'
        },
        {
            name: 'Aspire Intel',
            brand: 'Acer',
            description: 'Reliable laptop featuring Intel processors, vibrant display, ample storage, and affordable pricing, ideal for everyday computing and productivity.'
        }
    ]
    await Computer.insertMany(computers)
    console.log('Inserted computers')
}

const run = async() => {
    await main()
    db.close()
}
  
run()