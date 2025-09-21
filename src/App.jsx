import './assets/classes.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/HomeIndex'
import CollectionsIndex from './pages/Collections/CollectionsIndex'
import Products from './pages/Products/ProductsIndex'
import NotFound from './pages/NotFound/NotFoundIndex'
import RootLayout from './layout/RootLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element = {<Home />}/>
        <Route path='collections' element = {<CollectionsIndex />}/>
        <Route path='products' element = {<Products />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
