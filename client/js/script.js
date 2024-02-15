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

// console.log('working')

// const getData = async () => {
//     const responseComputer = await axios.get(`http://localhost:3001/computers`)
//     console.log(responseComputer)

//     let computerImage = document.querySelector('#computerImage')
//     computerImage.innerText = responseComputer.data[0].img_path
// }
// getData()


// document.addEventListener('DOMContentLoaded', async () => {
//     const baseURL = 'http://localhost:3001/'
//     const computerLogo = document.querySelector('#computer-logo')
  

//     const responseComputer = await axios.get(`${baseURL}computer`)
//     const computerData = responseComputer.data.data
   

//     computerLogo.src = computerData[0].image_path
   
// })


// playButton.addEventListener('click', () => {
//     // Move to Computers
//     window.location.href = "computers.html"
// })