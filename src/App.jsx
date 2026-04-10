
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Banner'
import Navbar from './component/Navbar'
import Footer from './Footer'
import Models from './Models'
import Cart from './component/Cart'

const getModels = async () => {
  const  res = await fetch("/Models.json")
  return res.json();
}

const modelPromise = getModels();





function App() {
  const [activeTab, setActiveTab] = useState("model")
 const [carts, setCarts] = useState([])
 console.log(carts)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Models" onClick={() => setActiveTab('model')} defaultChecked  />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`cart (${carts.length})`} onClick={() => setActiveTab('cart')}/>
  
</div>
      <Suspense fallback={<h1>Loading Models ...</h1>}>
        {activeTab === "model" && <Models modelPromise ={modelPromise} carts={carts} setCarts={setCarts}></Models>}
      </Suspense>
     {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}  
      <Footer></Footer>
      
    </>
  )
}

export default App
