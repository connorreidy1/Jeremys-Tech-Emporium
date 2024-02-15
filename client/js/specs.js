console.log('working')
const getData = async () => {
    const responseComputer = await axios.get(`http://localhost:3001/computers`)
    console.log(responseComputer)
    const responseSpecs = await axios.get(`http://localhost:3001/specs`)
    console.log(responseSpecs)
    const macBookProSpecs1Img = document.querySelector('#macbookpro-specs1-img')
    macBookProSpecs1Img.src = responseSpecs.data[0].img_path
    // const macBookProSpecs1Model = document.querySelector('#macbookpro-specs1-model')
    // macBookProSpecs1Model.innerText = responseSpecs.data[0].model
    const macBookProSpecs1Year = document.querySelector('#macbookpro-specs1-year')
    macBookProSpecs1Year.innerText = responseSpecs.data[0].year
    const macBookProSpecs1Size = document.querySelector('#macbookpro-specs1-size')
    macBookProSpecs1Size.innerText = `${responseSpecs.data[0].size_in_inches}"`
    const macBookProSpecs1Chip = document.querySelector('#macbookpro-specs1-chip')
    macBookProSpecs1Chip.innerText = `${responseSpecs.data[0].chip} Chip`
    const macBookProSpecs1Memory = document.querySelector('#macbookpro-specs1-memory')
    macBookProSpecs1Memory.innerText = `${responseSpecs.data[0].memory} Memory`
    const macBookProSpecs1Price = document.querySelector('#macbookpro-specs1-price')
    macBookProSpecs1Price.innerText = `$${responseSpecs.data[0].price}`
    const macBookProSpecs2Img = document.querySelector('#macbookpro-specs2-img')
    macBookProSpecs2Img.src = responseSpecs.data[1].img_path
    // const macBookProSpecs1Model = document.querySelector('#macbookpro-specs2-model')
    // macBookProSpecs1Model.innerText = responseSpecs.data[1].model
    const macBookProSpecs2Year = document.querySelector('#macbookpro-specs2-year')
    macBookProSpecs2Year.innerText = responseSpecs.data[1].year
    const macBookProSpecs2Size = document.querySelector('#macbookpro-specs2-size')
    macBookProSpecs2Size.innerText = `${responseSpecs.data[1].size_in_inches}"`
    const macBookProSpecs2Chip = document.querySelector('#macbookpro-specs2-chip')
    macBookProSpecs2Chip.innerText = `${responseSpecs.data[1].chip} Chip`
    const macBookProSpecs2Memory = document.querySelector('#macbookpro-specs2-memory')
    macBookProSpecs2Memory.innerText = `${responseSpecs.data[1].memory} Memory`
    const macBookProSpecs2Price = document.querySelector('#macbookpro-specs2-price')
    macBookProSpecs2Price.innerText = `$${responseSpecs.data[1].price}`
}
getData()

const homePage = document.querySelector('#logo')

homePage.addEventListener('click', () => {
    // Move to Home page
    window.location.href = "index.html"
})