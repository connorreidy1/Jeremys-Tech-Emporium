console.log('working')

const getData = async () => {
    const responseComputer = await axios.get(`http://localhost:3001/computers`)
    console.log(responseComputer)

    // const macBookProImg = document.querySelector('#macbookpro-img')
    // macBookProImg.innerText = responseComputer.data[0].img_path
    const macBookProName = document.querySelector('#macbookpro-name')
    macBookProName.innerText = responseComputer.data[0].name
    const macBookProBrandName = document.querySelector('#macbookpro-brandname')
    macBookProBrandName.innerText = responseComputer.data[0].brand
    const macBookProDescription = document.querySelector('#macbookpro-description')
    macBookProDescription.innerText = responseComputer.data[0].description
    
    // const macBookAirImg = document.querySelector('#macbookair-img')
    // macBookAirImg.innerText = responseComputer.data[1].img_path
    const macBookAirName = document.querySelector('#macbookair-name')
    macBookAirName.innerText = responseComputer.data[1].name
    const macBookAirBrandName = document.querySelector('#macbookair-brandname')
    macBookAirBrandName.innerText = responseComputer.data[1].brand
    const macBookAirDescription = document.querySelector('#macbookair-description')
    macBookAirDescription.innerText = responseComputer.data[1].description
    
    // const surfacePro9Img = document.querySelector('#surfacepro9-img')
    // surfacePro9Img.innerText = responseComputer.data[2].img_path
    const surfacePro9Name = document.querySelector('#surfacepro9-name')
    surfacePro9Name.innerText = responseComputer.data[2].name
    const surfacePro9BrandName = document.querySelector('#surfacepro9-brandname')
    surfacePro9BrandName.innerText = responseComputer.data[2].brand
    const surfacePro9Description = document.querySelector('#surfacepro9-description')
    surfacePro9Description.innerText = responseComputer.data[2].description
    
    // const aspireIntelImg = document.querySelector('#aspireintel-img')
    // aspireIntelImg.innerText = responseComputer.data[3].img_path
    const aspireIntelName = document.querySelector('#aspireintel-name')
    aspireIntelName.innerText = responseComputer.data[3].name
    const aspireIntelBrandName = document.querySelector('#aspireintel-brandname')
    aspireIntelBrandName.innerText = responseComputer.data[3].brand
    const aspireIntelDescription = document.querySelector('#aspireintel-description')
    aspireIntelDescription.innerText = responseComputer.data[3].description
}

getData()

// document.addEventListener('DOMContentLoaded', async () => {
//     const baseURL = 'http://localhost:3001/computers'
//     const macBookProImg = document.querySelector('#macbookpro-img')
//     const macBookProName = document.querySelector('#macbookpro-name')
//     const macBookProBrandName = document.querySelector('#macbookpro-brandname')
//     const macBookProDescription = document.querySelector('#macbookpro-description')
//     const macBookAirImg = document.querySelector('#macbookair-img')
//     const macBookAirName = document.querySelector('#macbookair-name')
//     const macBookAirBrandName = document.querySelector('#macbookair-brandname')
//     const macBookAirDescription = document.querySelector('#macbookair-description')
//     const surfacePro9Img = document.querySelector('#surfacepro9-img')
//     const surfacePro9Name = document.querySelector('#surfacepro9-name')
//     const surfacePro9BrandName = document.querySelector('#surfacepro9-brandname')
//     const surfacePro9Description = document.querySelector('#surfacepro9-description')
//     const aspireIntelImg = document.querySelector('#aspireintel-img')
//     const aspireIntelName = document.querySelector('#aspireintel-name')
//     const aspireIntelBrandName = document.querySelector('#aspireintel-brandname')
//     const aspireIntelDescription = document.querySelector('#aspireintel-description')

//     // const responseComputer = await axios.get(`http://localhost:3001/computers`)
    

//     const computerData = responseComputer.data.data
   
//     //MacBook Pro
//     macBookProImg = computerData[0].image_path
//     macBookProName = computerData[0].name
//     macBookProBrandName = computerData[0].brand
//     macBookProDescription = computerData[0].description

//     //MacBook Air
//     macBookAirImg = computerData[1].image_path
//     macBookAirName = computerData[1].name
//     macBookAirBrandName = computerData[1].brand
//     macBookAirDescription = computerData[1].description

//     //Surface Pro 9
//     surfacePro9Img = computerData[2].image_path
//     surfacePro9Name = computerData[2].name
//     surfacePro9BrandName = computerData[2].brand
//     surfacePro9Description = computerData[2].description

//     //Aspire Intel
//     aspireIntelImg = computerData[3].image_path
//     aspireIntelName = computerData[3].name
//     aspireIntelBrandName = computerData[3].brand
//     aspireIntelDescription = computerData[3].description
// })