import React, { useState } from 'react'
import CollectionsCard from './CollectionsCard'

const CollectionsContent = () => {

  const [page, setPage] = useState(1);
  const [searchQuery, setQuery] = useState(null);

  var data = []
  var perPage = 8
  var pages = []
  var numberOfPages = 1

  data = [
    {
      "collectionID": 1,
      "collectionImage": "Apple",
      "collectionName": "Apple",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 2,
      "collectionImage": "Banana",
      "collectionName": "Banana",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 3,
      "collectionImage": "Carrot",
      "collectionName": "Carrot",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 4,
      "collectionImage": "Dragon Fruit",
      "collectionName": "Dragon Fruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 5,
      "collectionImage": "Elderberry",
      "collectionName": "Elderberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 6,
      "collectionImage": "Fig",
      "collectionName": "Fig",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 7,
      "collectionImage": "Guava",
      "collectionName": "Guava",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 8,
      "collectionImage": "Honeydew",
      "collectionName": "Honeydew",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 9,
      "collectionImage": "Indian Plum",
      "collectionName": "Indian Plum",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 10,
      "collectionImage": "Jackfruit",
      "collectionName": "Jackfruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 11,
      "collectionImage": "Kiwi",
      "collectionName": "Kiwi",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 12,
      "collectionImage": "Lemon",
      "collectionName": "Lemon",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 13,
      "collectionImage": "Mango",
      "collectionName": "Mango",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 14,
      "collectionImage": "Nectarine",
      "collectionName": "Nectarine",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 15,
      "collectionImage": "Orange",
      "collectionName": "Orange",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 16,
      "collectionImage": "Papaya",
      "collectionName": "Papaya",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 17,
      "collectionImage": "Quince",
      "collectionName": "Quince",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 18,
      "collectionImage": "Rambutan",
      "collectionName": "Rambutan",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 19,
      "collectionImage": "Strawberry",
      "collectionName": "Strawberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 20,
      "collectionImage": "Tomato",
      "collectionName": "Tomato",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    }
  ]

  function paginate(data) {
    const from = (page - 1) * perPage
    const to = page * perPage
    return data.slice(from, to)
  }

  function setPages() {
    numberOfPages = Math.ceil(data.length / perPage)
    for (let index = 1; index <= numberOfPages; index++) {
      pages.push(index)
    }
  }

  function incrementPage(){
    setPage(page + 1)
  }

  function decrementPage(){
    setPage(page - 1)
  }

  setPages()

  return (
  <div className="p-2">
    <h1 className="text-4xl font-bold p-2 text-center">Collections</h1>

    <div className="flex justify-center place-items-center p-4">
      <label className="input">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search collections..." />
      </label>
    </div>


    <div className="flex justify-center flex-wrap gap-16 p-2 place-items-center grid grid-cols-2">
      {paginate(data).map((data, index) => (
        <CollectionsCard collectionID={data.collectionID} collectionImage={data.collectionImage} collectionName={data.collectionName} collectionIsPromoted={data.collectionIsPromoted} collectionDescription={data.collectionDescription} />
      ))}
    </div>
    
    <div className="join p-8 flex justify-center place-items-center">
      {(page != 1) ? <button className="join-item btn" onClick={decrementPage}>«</button> : <button className="join-item btn btn-disabled">«</button>}
      
      {(page != numberOfPages) ? <button className="join-item btn" onClick={incrementPage}>»</button> : <button className="join-item btn btn-disabled">»</button>}
    </div>

  </div>
  )
}

export default CollectionsContent