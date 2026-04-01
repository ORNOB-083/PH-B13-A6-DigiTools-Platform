import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import StatsSection from './component/StatsSection'
import HeroSection from './component/HeroSection'
import StepsSection from './component/StepsSection'
import PricingSection from './component/PricingSection'
import BottomSection from './component/BottomSection'
import Footer from './component/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>

      <StatsSection></StatsSection>

      <HeroSection></HeroSection>


      <StepsSection></StepsSection>

      <PricingSection></PricingSection>

      <BottomSection></BottomSection>

      <Footer></Footer>

      {/* <h1 className='font-bold text-2xl bg-amber-900 text-white p-4 text-center '>Hello Vite + React</h1> */}
    </>
  )
}

export default App
