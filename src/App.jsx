
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import DigiTools from './components/DigiTools/DigiTools'
import Banner from './components/homepage/Banner'
import UserRating from './components/homepage/UserRating'
import NavBar from './components/Navbar/NavBar'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'


const getDigiTools = async () => {
  const res = await fetch("/digitaltools.json")
  return res.json();
}

const toolsPromise = getDigiTools();

function App() {
  const [activeBtn, setActiveBtn] = useState("product");
  const [buyNow, setBuyNow] = useState([]);
  

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <UserRating></UserRating>
      <div className='flex justify-center py-5'>
        <button onClick={() => setActiveBtn("product")} className={`btn w-30 ${activeBtn === "product" ?
          "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent"}  text-lg border-none rounded-full`}>Products</button>
        <button onClick={() => setActiveBtn("cart")} className={`btn w-30 ${activeBtn === "cart" ?
          "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent"}  text-lg border-none rounded-full`}>Cart ({buyNow.length})</button>
      </div>
      {activeBtn === "product" ? (<DigiTools toolsPromise={toolsPromise} 
      setBuyNow={setBuyNow} buyNow={buyNow}></DigiTools>) : 
      <Cart buyNow={buyNow} setBuyNow={setBuyNow}></Cart>}

      {/* react toastify */}
        <ToastContainer />
        <Footer></Footer>
    </>
  )
}

export default App
