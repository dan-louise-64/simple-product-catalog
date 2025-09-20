import React from 'react'
import ProductsCard from './ProductsCard'

const ProductsContent = () => {
  const items = [
    "Apple", "Apricot", "Avocado",
    "Banana", "Blackberry", "Blueberry",
    "Cherry", "Coconut", "Cranberry",
    "Date", "Dragon Fruit", "Durian",
    "Elderberry", "Egg Fruit",
    "Fig", "Feijoa",
    "Grape", "Guava", "Gooseberry",
    "Honeydew", "Huckleberry",
    "Indian Plum",
    "Jackfruit", "Jujube", "Jambolan",
    "Kiwi", "Kumquat", "Kaffir Lime",
    "Lemon", "Lime", "Lychee",
    "Mango", "Melon", "Mulberry",
    "Nectarine", "Navel Orange",
    "Orange", "Olive", "Ogeechee Lime",
    "Papaya", "Peach", "Pear",
    "Quince",
    "Raspberry", "Rambutan", "Redcurrant",
    "Strawberry", "Star Fruit", "Soursop",
    "Tangerine", "Tomato", "Tamarind",
    "Ugli Fruit", "Umbu",
    "Valencia Orange",
    "Watermelon", "White Sapote",
    "Xigua",
    "Yellow Passion Fruit",
    "Zucchini"
  ];
  const testDescription = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, provident esse eos tenetur corporis quo inventore, praesentium possimus expedita nulla facere vero ex est necessitatibus ipsum deserunt nemo perspiciatis blanditiis."

  return (
    <div className="p-2">
      <h1 className="text-4xl font-bold p-2 text-center">Products</h1>

      <div className="flex justify-center flex-wrap gap-16 p-2 place-items-center">
        {items.map((item, index) => (
          <ProductsCard productID={index} productImage={"testimage"} productName={item} productIsPromoted={true} productCost={"TestCost"} productDescription={testDescription} productCollection={"TestCollection"}/>
        ))}
      </div>
    </div>
  )
}

export default ProductsContent