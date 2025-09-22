import React from 'react'
import { Link } from 'react-router-dom';

const CollectionDetailsList = ({productID ,productImage, productName, productIsPromoted, productCost, productDescription, productCollectionID, productCollectionName, productRating}) => {
  const productLink = "/products/" + productID;
  return (
    <li class="list-row">
      <div><img class="size-10 rounded-box" src="productImage"/></div>
      <div>
        <div>{productName} {productIsPromoted ? <div className="badge badge-secondary">Promoted</div> : <div></div>}</div> 
        <div class="text-xs uppercase font-semibold opacity-60">PhP {productCost}</div>
      </div>
      <div class="rating rating-xs md:rating-md">
        <div class="mask mask-star-2 bg-orange-400" aria-label="1 star" aria-current={Math.round(productRating) == 1}></div>
        <div class="mask mask-star-2 bg-orange-400" aria-label="2 star" aria-current={Math.round(productRating) == 2}></div>
        <div class="mask mask-star-2 bg-orange-400" aria-label="3 star" aria-current={Math.round(productRating) == 3}></div>
        <div class="mask mask-star-2 bg-orange-400" aria-label="4 star" aria-current={Math.round(productRating) == 4}></div>
        <div class="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current={Math.round(productRating) == 5}></div>
      </div>
      <span className="text-right">{productCost}</span>
      <p class="list-col-wrap text-xs">
        {productDescription}
      </p>
      <Link to={productLink}>
        <button class="btn btn-primary">Go to Item.</button>
      </Link>
    </li>
  )
}

export default CollectionDetailsList