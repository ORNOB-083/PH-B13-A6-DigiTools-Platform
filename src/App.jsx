import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import StatsSection from './component/StatsSection'
import HeroSection from './component/HeroSection'
import StepsSection from './component/StepsSection'
import PricingSection from './component/PricingSection'
import BottomSection from './component/BottomSection'
import Footer from './component/Footer'
import Models from './component/Models'
import Cart from './component/Cart'
import { ToastContainer } from 'react-toastify'

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();


function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([])

  return (
    <>
      <NavBar carts={carts} />

      {activeTab === "model" && <StatsSection modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "model" && <HeroSection modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}

      <div>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mt-20">
            Premium Digital Tools
          </h2>
          <p className="text-sm text-gray-500 mt-6">
            Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          {/* Products Button */}
          <button
            onClick={() => setActiveTab("model")}
            className={`h-10 w-40 rounded-full font-semibold transition-all duration-300 ${activeTab === "model"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-200 text-gray-700"
              }`}>
            Products
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setActiveTab("cart")}
            className={`h-10 w-40 rounded-full font-semibold transition-all duration-300 ${activeTab === "cart"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-200 text-gray-700"}`}>
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
      {activeTab === "model" && <StepsSection modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "model" && <PricingSection modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "model" && <BottomSection modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
