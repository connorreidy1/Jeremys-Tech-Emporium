console.log('working')

const getData = async () => {
    const responseComputer = await axios.get(`http://localhost:3001/computers`)
    console.log(responseComputer)

    const macBookProImg = document.querySelector('#macbookpro-img')
    macBookProImg.src = responseComputer.data[0].img_path
    const macBookProName = document.querySelector('#macbookpro-name')
    macBookProName.innerText = responseComputer.data[0].name
    const macBookProBrandName = document.querySelector('#macbookpro-brandname')
    macBookProBrandName.innerText = responseComputer.data[0].brand
    const macBookProDescription = document.querySelector('#macbookpro-description')
    macBookProDescription.innerText = responseComputer.data[0].description
    
    const macBookAirImg = document.querySelector('#macbookair-img')
    macBookAirImg.src = responseComputer.data[1].img_path
    const macBookAirName = document.querySelector('#macbookair-name')
    macBookAirName.innerText = responseComputer.data[1].name
    const macBookAirBrandName = document.querySelector('#macbookair-brandname')
    macBookAirBrandName.innerText = responseComputer.data[1].brand
    const macBookAirDescription = document.querySelector('#macbookair-description')
    macBookAirDescription.innerText = responseComputer.data[1].description
    
    const surfacePro9Img = document.querySelector('#surfacepro9-img')
    surfacePro9Img.src = responseComputer.data[2].img_path
    const surfacePro9Name = document.querySelector('#surfacepro9-name')
    surfacePro9Name.innerText = responseComputer.data[2].name
    const surfacePro9BrandName = document.querySelector('#surfacepro9-brandname')
    surfacePro9BrandName.innerText = responseComputer.data[2].brand
    const surfacePro9Description = document.querySelector('#surfacepro9-description')
    surfacePro9Description.innerText = responseComputer.data[2].description
    
    const aspireIntelImg = document.querySelector('#aspireintel-img')
    aspireIntelImg.src = responseComputer.data[3].img_path
    const aspireIntelName = document.querySelector('#aspireintel-name')
    aspireIntelName.innerText = responseComputer.data[3].name
    const aspireIntelBrandName = document.querySelector('#aspireintel-brandname')
    aspireIntelBrandName.innerText = responseComputer.data[3].brand
    const aspireIntelDescription = document.querySelector('#aspireintel-description')
    aspireIntelDescription.innerText = responseComputer.data[3].description
}

getData()

const homePage = document.querySelector('#logo')
homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "index.html"
})

const specPage = document.querySelector('#macBookPro-container')
specPage.addEventListener('click', () => {
    // Move to Spec page
    window.location.href = "specs.html"
})