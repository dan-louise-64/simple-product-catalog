import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import CollectionDetailsCard from './CollectionDetailsCard'; 

const CollectionDetails = () => {
  const collectionDetailsDataInitial = useLoaderData();
  const collectionDetailsData = collectionDetailsDataInitial[0];

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