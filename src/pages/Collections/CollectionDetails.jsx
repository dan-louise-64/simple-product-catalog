import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import CollectionDetailsCard from './CollectionDetailsCard'; 
import CollectionDetailsList from './CollectionDetailsList';

const CollectionDetails = () => {
  const collectionDetailsData = useLoaderData();

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1);  
  };

  return (
    <div className='p-2'>
      <h1 className="text-4xl font-bold p-2 text-center">Product Details</h1>
      <CollectionDetailsCard 
        collectionID={collectionDetailsData.id} 
        collectionImage={collectionDetailsData.collectionImage} 
        collectionName={collectionDetailsData.collectionName} 
        collectionIsPromoted={collectionDetailsData.collectionIsPromoted}
        collectionDescription={collectionDetailsData.collectionDescription}
      />

      <ul class="list bg-base-100 rounded-box shadow-md">
        
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Products in this collection</li>
          {(Object.keys(collectionDetailsData.collectionProducts).length) > 0 ? (
            collectionDetailsData.collectionProducts.map((productData, index) => (
              <CollectionDetailsList productID={productData.id} productImage={productData.productImage} productName={productData.productName} productIsPromoted={productData.productIsPromoted} productCost={productData.productCost} productDescription={productData.productDescription} productCollectionID={productData.productCollectionID} productCollectionName={productData.productCollectionName} productRating={productData.productRating}/>
            ))
          ) : (
            <span>No results found.</span>
          )}
      </ul>



      <div className="p-8 flex justify-center place-items-center">
        <button className="btn btn-soft" onClick={handleGoBack}>Go back</button>
      </div>
    </div>
  )
}

export default CollectionDetails

export const collectionDetailsLoader = async ({params})=>{
  const {id} = params;
  const res = await fetch("http://localhost:3000/collections/" + id);

  return res.json()
}