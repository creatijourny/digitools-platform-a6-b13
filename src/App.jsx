
import './App.css'
import DigiTools from './components/DigiTools/DigiTools'
import Banner from './components/homepage/Banner'
import UserRating from './components/homepage/UserRating'
import NavBar from './components/Navbar/NavBar'

const getDigiTools = async () => {
  const res = await fetch("/digitaltools.json")
  return res.json()
}

const toolsPromise = getDigiTools()

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <UserRating></UserRating>
    <DigiTools toolsPromise={toolsPromise}></DigiTools>
    

      
    </>
  )
}

export default App
