import React from 'react'

const ProductDetailsCard = ({productID, productImage, productName, productIsPromoted, productCost, productDescription, productCollection}) => {
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
        <h2 class="card-title">{productCost} PhP</h2>
        <p>{productDescription}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now!</button>
        </div>
        <div className="card-actions justify-end">
          <span>In collection: {productCollection}</span>
        </div>
      </div>
    </div>
    
  )
}

export default ProductDetailsCard