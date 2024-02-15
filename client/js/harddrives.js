console.log('working')

const getData = async () => {
    const responseHarddrive = await axios.get(`http://localhost:3001/harddrives`)
    console.log(responseHarddrive)

    const lacie1Img = document.querySelector('#lacie1-img')
    lacie1Img.src = responseHarddrive.data[0].img_path
    const lacie1Name = document.querySelector('#lacie1-name')
    lacie1Name.innerText = responseHarddrive.data[0].name
    const lacie1BrandName = document.querySelector('#lacie1-brandname')
    lacie1BrandName.innerText = `Brand: ${responseHarddrive.data[0].brand}`
    const lacie1Capacity = document.querySelector('#lacie1-capacity')
    lacie1Capacity.innerText = `Capacity: ${responseHarddrive.data[0].capacity}`
    const lacie1Year = document.querySelector('#lacie1-year')
    lacie1Year.src = `Year: ${responseHarddrive.data[0].make_year}`
    const lacie1Storage = document.querySelector('#lacie1-storage')
    lacie1Storage.innerText = `Drive Type: ${responseHarddrive.data[0].storage_type}`
    const lacie1Interface = document.querySelector('#lacie1-interface')
    lacie1Interface.innerText = `Interface: ${responseHarddrive.data[0].interface}`
    const lacie1Speed = document.querySelector('#lacie1-speed')
    lacie1Speed.innerText = `Max Speed: ${responseHarddrive.data[0].max_speed}`
    const lacie1Price = document.querySelector('#lacie1-price')
    lacie1Price.innerText = `$${responseHarddrive.data[0].price}`

    const lacie2Img = document.querySelector('#lacie2-img')
    lacie2Img.src = responseHarddrive.data[1].img_path
    const lacie2Name = document.querySelector('#lacie2-name')
    lacie2Name.innerText = responseHarddrive.data[1].name
    const lacie2BrandName = document.querySelector('#lacie2-brandname')
    lacie2BrandName.innerText = `Brand: ${responseHarddrive.data[1].brand}`
    const lacie2Capacity = document.querySelector('#lacie2-capacity')
    lacie2Capacity.innerText = `Capacity: ${responseHarddrive.data[1].capacity}`
    const lacie2Year = document.querySelector('#lacie2-year')
    lacie2Year.src = `Year: ${responseHarddrive.data[1].make_year}`
    const lacie2Storage = document.querySelector('#lacie2-storage')
    lacie2Storage.innerText = `Drive Type: ${responseHarddrive.data[1].storage_type}`
    const lacie2Interface = document.querySelector('#lacie2-interface')
    lacie2Interface.innerText = `Interface: ${responseHarddrive.data[1].interface}`
    const lacie2Speed = document.querySelector('#lacie2-speed')
    lacie2Speed.innerText = `Max Speed: ${responseHarddrive.data[1].max_speed}`
    const lacie2Price = document.querySelector('#lacie2-price')
    lacie2Price.innerText = `$${responseHarddrive.data[1].price}`

    const lacieSSDImg = document.querySelector('#lacieSSD-img')
    lacieSSDImg.src = responseHarddrive.data[2].img_path
    const lacieSSDName = document.querySelector('#lacieSSD-name')
    lacieSSDName.innerText = responseHarddrive.data[2].name
    const lacieSSDBrandName = document.querySelector('#lacieSSD-brandname')
    lacieSSDBrandName.innerText = `Brand: ${responseHarddrive.data[2].brand}`
    const lacieSSDCapacity = document.querySelector('#lacieSSD-capacity')
    lacieSSDCapacity.innerText = `Capacity: ${responseHarddrive.data[2].capacity}`
    const lacieSSDYear = document.querySelector('#lacieSSD-year')
    lacieSSDYear.src = `Year: ${responseHarddrive.data[2].make_year}`
    const lacieSSDStorage = document.querySelector('#lacieSSD-storage')
    lacieSSDStorage.innerText = `Drive Type: ${responseHarddrive.data[2].storage_type}`
    const lacieSSDInterface = document.querySelector('#lacieSSD-interface')
    lacieSSDInterface.innerText = `Interface: ${responseHarddrive.data[2].interface}`
    const lacieSSDSpeed = document.querySelector('#lacieSSD-speed')
    lacieSSDSpeed.innerText = `Max Speed: ${responseHarddrive.data[2].max_speed}`
    const lacieSSDPrice = document.querySelector('#lacieSSD-price')
    lacieSSDPrice.innerText = `$${responseHarddrive.data[2].price}`

    const wdImg = document.querySelector('#wd-img')
    wdImg.src = responseHarddrive.data[3].img_path
    const wdName = document.querySelector('#wd-name')
    wdName.innerText = responseHarddrive.data[3].name
    const wdBrandName = document.querySelector('#wd-brandname')
    wdBrandName.innerText = `Brand: ${responseHarddrive.data[3].brand}`
    const wdCapacity = document.querySelector('#wd-capacity')
    wdCapacity.innerText = `Capacity: ${responseHarddrive.data[3].capacity}`
    const wdYear = document.querySelector('#wd-year')
    wdYear.src = `Year: ${responseHarddrive.data[3].make_year}`
    const wdStorage = document.querySelector('#wd-storage')
    wdStorage.innerText = `Drive Type: ${responseHarddrive.data[3].storage_type}`
    const wdInterface = document.querySelector('#wd-interface')
    wdInterface.innerText = `Interface: ${responseHarddrive.data[3].interface}`
    const wdSpeed = document.querySelector('#wd-speed')
    wdSpeed.innerText = `Max Speed: ${responseHarddrive.data[3].max_speed}`
    const wdPrice = document.querySelector('#wd-price')
    wdPrice.innerText = `$${responseHarddrive.data[3].price}`

    const sandiskImg = document.querySelector('#sandisk-img')
    sandiskImg.src = responseHarddrive.data[4].img_path
    const sandiskName = document.querySelector('#sandisk-name')
    sandiskName.innerText = responseHarddrive.data[4].name
    const sandiskBrandName = document.querySelector('#sandisk-brandname')
    sandiskBrandName.innerText = `Brand: ${responseHarddrive.data[4].brand}`
    const sandiskCapacity = document.querySelector('#sandisk-capacity')
    sandiskCapacity.innerText = `Capacity: ${responseHarddrive.data[4].capacity}`
    const sandiskYear = document.querySelector('#sandisk-year')
    sandiskYear.src = `Year: ${responseHarddrive.data[4].make_year}`
    const sandiskStorage = document.querySelector('#sandisk-storage')
    sandiskStorage.innerText = `Drive Type: ${responseHarddrive.data[4].storage_type}`
    const sandiskInterface = document.querySelector('#sandisk-interface')
    sandiskInterface.innerText = `Interface: ${responseHarddrive.data[4].interface}`
    const sandiskSpeed = document.querySelector('#sandisk-speed')
    sandiskSpeed.innerText = `Max Speed: ${responseHarddrive.data[4].max_speed}`
    const sandiskPrice = document.querySelector('#sandisk-price')
    sandiskPrice.innerText = `$${responseHarddrive.data[4].price}`
}

getData()

const homePage = document.querySelector('#logo')
homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "index.html"
})