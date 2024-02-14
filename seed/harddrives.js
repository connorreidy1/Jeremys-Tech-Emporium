const db = require('../db')
const Harddrive = require('../models/harddrive')

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
            price: 84.99,
            img_path: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/lacie_stfr1000800_1tb_rugged_mini_usb_1565283989_1374583.jpg',
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
            price: 109.99,
            img_path: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/lacie_stfr1000800_1tb_rugged_mini_usb_1565283989_1374583.jpg',
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
            price: 219.99,
            img_path: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/lacie_sthr2000800_2tb_rugged_ssd_usb_c_1567698425_1503994.jpg',
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
            price: 129.99,
            img_path: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/wd_wdbu6y0050bbk_wesn_5tb_elements_portable_hd_1576236956_1527251.jpg',
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
            price: 169.99,
            img_path: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sandisk_sdssde61_2t00_g25_2tb_extreme_portable_ssd_1603896615_1595432.jpg',
        },
    ]
    await Harddrive.insertMany(harddrives)
    console.log('Inserted harddrives')
}

const run = async () => {
    await main()
    db.close()
}
  
run()