import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetailsCard = ({productImage, productName, productIsPromoted, productCost, productDescription, productCollectionID, productCollectionName, productRating}) => {
  const collectionLink = "/collections/" + productCollectionID;
  return (
    <div class="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={productImage}
          alt="Album"
          className='w-1/2'
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        {productIsPromoted ? <div className="badge badge-secondary">Promoted</div> : <div></div>}
        <div class="rating rating-xs md:rating-md">
          <div class="mask mask-star-2 bg-orange-400" aria-label="1 star" aria-current={Math.round(productRating) == 1}></div>
          <div class="mask mask-star-2 bg-orange-400" aria-label="2 star" aria-current={Math.round(productRating) == 2}></div>
          <div class="mask mask-star-2 bg-orange-400" aria-label="3 star" aria-current={Math.round(productRating) == 3}></div>
          <div class="mask mask-star-2 bg-orange-400" aria-label="4 star" aria-current={Math.round(productRating) == 4}></div>
          <div class="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current={Math.round(productRating) == 5}></div>
        </div>
        <h2 class="card-title">{productCost} PhP</h2>
        <p>{productDescription}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now!</button>
        </div>
        <div className="card-actions justify-end">
          <span>In collection: 
            <Link to={collectionLink}>
              <div className="badge badge-outline">{productCollectionName}</div>
            </Link>
            </span>
        </div>
      </div>
    </div>
    
  )
}

export default ProductDetailsCard