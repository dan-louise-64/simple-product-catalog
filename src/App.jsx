import './assets/classes.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/HomeIndex'
import CollectionsIndex from './pages/Collections/CollectionsIndex'
import ProductsIndex from './pages/Products/ProductsIndex'
import NotFoundIndex from './pages/NotFound/NotFoundIndex'
import RootLayout from './layout/RootLayout'
import ProductsContent, { productsLoader } from './pages/Products/ProductsContent'
import CollectionsContent, { collectionsLoader } from './pages/Collections/CollectionsContent'
import ProductDetails, { productDetailsLoader } from './pages/Products/ProductDetails'
import CollectionDetails, { collectionDetailsLoader } from './pages/Collections/CollectionDetails'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element = {<Home />}/>
        <Route path='collections' element = {<CollectionsIndex />}>
          <Route index element = {<CollectionsContent />} loader={collectionsLoader}></Route>
          <Route path=':id' element={<CollectionDetails />} loader={collectionDetailsLoader}></Route>
        </Route>
        <Route path='products' element = {<ProductsIndex />}>
          <Route index element = {<ProductsContent />} loader={productsLoader}></Route>
          <Route path=':id' element={<ProductDetails/>} loader={productDetailsLoader}/>
        </Route>
        <Route path="*" element={<NotFoundIndex />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
