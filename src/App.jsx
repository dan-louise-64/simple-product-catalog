import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/classes.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/products' element = {<Products />}/>
      </Routes>
    </div>
  )
}

export default App
