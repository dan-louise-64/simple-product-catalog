import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
  const productDetailsData = useLoaderData();
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1);  
  };

  return (
    <div className='p-2'>
      <h1 className="text-4xl font-bold p-2 text-center">Product Details</h1>
      <ProductDetailsCard 
        productID={productDetailsData.id} 
        productImage={productDetailsData.productImage} 
        productName={productDetailsData.productName} 
        productIsPromoted={productDetailsData.productIsPromoted} 
        productCost={productDetailsData.productCost} 
        productDescription={productDetailsData.productDescription} 
        productCollection={productDetailsData.productCollection}
      />

      <div className="p-8 flex justify-center place-items-center">
        <button className="btn btn-soft" onClick={handleGoBack}>Go back</button>
      </div>
    </div>
  )
}

export default ProductDetails

export const productDetailsLoader = async ({params})=>{
  const {id} = params;
  const res = await fetch("http://localhost:5000/products/" + id);

  return res.json()
}