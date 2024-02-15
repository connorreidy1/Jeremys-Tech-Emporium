console.log('working')

const getData = async () => {
    const responseComputer = await axios.get(`http://localhost:3001/computers`)
    console.log(responseComputer)

    const responseHarddrive = await axios.get(`http://localhost:3001/harddrives`)
    console.log(responseHarddrive)

    let computerImage = document.querySelector('#computerImage')
    computerImage.src = responseComputer.data[0].img_path

    let harddriveImage = document.querySelector('#harddriveImage')
    harddriveImage.src = responseHarddrive.data[0].img_path
}
getData()

const computerPage = document.querySelector('#computer-container')
computerPage.addEventListener('click', () => {
    // Move to Computers
    window.location.href = "computers.html"
})

const harddrivePage = document.querySelector('#harddrive-container')
harddrivePage.addEventListener('click', () => {
    // Move to Hard Drives
    window.location.href = "harddrives.html"
})
