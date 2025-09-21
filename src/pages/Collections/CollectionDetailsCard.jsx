import React from 'react'

const CollectionDetailsCard = ({collectionID, collectionImage, collectionName, collectionIsPromoted, collectionCost, collectionDescription, collectionCollection}) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={collectionImage}
          alt="Album"
          className='w-1/2'
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{collectionName}</h2>
        {collectionIsPromoted ? <div className="badge badge-secondary">Promoted</div> : <div></div>}
        <p>{collectionDescription}</p>
      </div>
    </div>
    
  )
}

export default CollectionDetailsCard