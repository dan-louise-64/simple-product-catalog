import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCard = ({productID, productImage, productName, productIsPromoted, productCost, productDescription, productCollection}) => {
  const productLink = "/products/" + productID;
  return (
    <Link to={productLink}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={productImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productName}
            {productIsPromoted ? <div className="badge badge-secondary">Promoted</div> : <div></div>}
          </h2>
          <span className="text-right">{productCost}</span>
          <p>{productDescription}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{productCollection}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductsCard