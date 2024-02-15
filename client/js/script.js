console.log('working')

const getData = async () => {
    const responseComputer = await axios.get(`http://localhost:3001/computers`)
    console.log(responseComputer)

    let computerImage = document.querySelector('#computerImage')
    computerImage.innerText = responseComputer.data[0].img_path
}
getData()


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