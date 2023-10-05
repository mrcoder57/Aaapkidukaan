import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Hero from './components/Hero'

import { BrowserRouter } from 'react-router-dom';

// import {Button} from 'daisyui';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Hero/>
      <Products id='products'></Products>
      
      </BrowserRouter>
      
      

    </>
  )
}

export default App
