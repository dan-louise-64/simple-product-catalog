import React from 'react'
import { Link } from 'react-router-dom';

const CollectionsCard = ({collectionID, collectionImage, collectionName, collectionIsPromoted, collectionDescription}) => {
  const collectionLink = "/collections/" + collectionID;

  return (
    <div class="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={collectionImage}
          alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{collectionName}</h2>
        {collectionIsPromoted ? <div className="badge badge-secondary">Promoted</div> : <div></div>}
        <p>{collectionDescription}</p>
        <div class="card-actions justify-end">
          <Link to={collectionLink}>
            <button class="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CollectionsCard