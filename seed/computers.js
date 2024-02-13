const db = require('../db')
const { Computer } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const computers = [
        {
            name: 'MacBook Pro',
            brand: 'Apple',
            description: 'Powerful, premium laptop with high-performance processors, stunning Retina display, and versatile Thunderbolt ports for professional users.',
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534640_sd.jpg;maxHeight=640;maxWidth=550',
        },
        {
            name: 'MacBook Air',
            brand: 'Apple',
            description: 'Sleek, lightweight laptop with long battery life, vibrant Retina display, and ultra-portable design, perfect for everyday computing tasks.',
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;maxHeight=640;maxWidth=550',
        },
        {
            name: 'Surface Pro 9',
            brand: 'Microsoft',
            description: 'Versatile, portable 2-in-1 device with powerful performance, stunning PixelSense display, and innovative Surface Pen support for creativity.',
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560599cv11d.jpg;maxHeight=640;maxWidth=550',
        },
        {
            name: 'Aspire Intel',
            brand: 'Acer',
            description: 'Reliable laptop featuring Intel processors, vibrant display, ample storage, and affordable pricing, ideal for everyday computing and productivity.',
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551127_sd.jpg;maxHeight=640;maxWidth=550',
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