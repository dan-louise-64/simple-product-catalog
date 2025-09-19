import { useState } from 'react'
import './assets/classes.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './pages/Home/HomeIndex'
import CollectionsIndex from './pages/Collections/CollectionsIndex'
import Products from './pages/Products/ProductsIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/collections' element = {<CollectionsIndex />}/>
        <Route path='/products' element = {<Products />}/>
      </Routes>
    </div>
  )
}

export default App
