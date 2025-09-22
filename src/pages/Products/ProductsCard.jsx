import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCard = ({productID, productImage, productName, productIsPromoted, productCost, productDescription, productCollectionID, productRating}) => {
  const productLink = "/products/" + productID;
  return (
    <Link to={productLink}>
      <div className="card bg-base-100 grow shadow-sm">
        <figure>
          <img src={productImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productName}
            {productIsPromoted ? <div className="badge badge-secondary">Promoted</div> : <div></div>}
          </h2>
          <div class="rating rating-xs md:rating-md">
            <div class="mask mask-star-2 bg-orange-400" aria-label="1 star" aria-current={Math.round(productRating) == 1}></div>
            <div class="mask mask-star-2 bg-orange-400" aria-label="2 star" aria-current={Math.round(productRating) == 2}></div>
            <div class="mask mask-star-2 bg-orange-400" aria-label="3 star" aria-current={Math.round(productRating) == 3}></div>
            <div class="mask mask-star-2 bg-orange-400" aria-label="4 star" aria-current={Math.round(productRating) == 4}></div>
            <div class="mask mask-star-2 bg-orange-400" aria-label="5 star" aria-current={Math.round(productRating) == 5}></div>
          </div>
          <span className="text-right">{productCost}</span>
          <p>{productDescription}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{productCollectionID}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductsCard