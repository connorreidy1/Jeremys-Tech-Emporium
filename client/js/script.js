console.log('working')

const getData = async () => {
    const responseComputer = await axios.get(`http://localhost:3001/computer`)
    console.log(responseComputer)
}
getData()


// document.addEventListener('DOMContentLoaded', async () => {
//     const baseURL = 'http://localhost:3001/'
//     const computerLogo = document.querySelector('#computer-logo')
  

//     const responseComputer = await axios.get(`${baseURL}computer`)
//     const computerData = responseComputer.data.data
   

//     computerLogo.src = computerData[0].image_path
   
// })