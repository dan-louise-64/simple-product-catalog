import React, { useState } from 'react'
import CollectionsCard from './CollectionsCard'

const CollectionsContent = () => {
  var data = []
  
  data.push.apply(data, [
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
    },
    {
      "collectionID": 21,
      "collectionImage": "Apple",
      "collectionName": "Apple",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 22,
      "collectionImage": "Banana",
      "collectionName": "Banana",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 23,
      "collectionImage": "Carrot",
      "collectionName": "Carrot",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 24,
      "collectionImage": "Dragon Fruit",
      "collectionName": "Dragon Fruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 25,
      "collectionImage": "Elderberry",
      "collectionName": "Elderberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 26,
      "collectionImage": "Fig",
      "collectionName": "Fig",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 27,
      "collectionImage": "Guava",
      "collectionName": "Guava",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 28,
      "collectionImage": "Honeydew",
      "collectionName": "Honeydew",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 29,
      "collectionImage": "Indian Plum",
      "collectionName": "Indian Plum",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 30,
      "collectionImage": "Jackfruit",
      "collectionName": "Jackfruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 31,
      "collectionImage": "Kiwi",
      "collectionName": "Kiwi",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 32,
      "collectionImage": "Lemon",
      "collectionName": "Lemon",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 33,
      "collectionImage": "Mango",
      "collectionName": "Mango",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 34,
      "collectionImage": "Nectarine",
      "collectionName": "Nectarine",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 35,
      "collectionImage": "Orange",
      "collectionName": "Orange",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 36,
      "collectionImage": "Papaya",
      "collectionName": "Papaya",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 37,
      "collectionImage": "Quince",
      "collectionName": "Quince",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 38,
      "collectionImage": "Rambutan",
      "collectionName": "Rambutan",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 39,
      "collectionImage": "Strawberry",
      "collectionName": "Strawberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 40,
      "collectionImage": "Tomato",
      "collectionName": "Tomato",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 41,
      "collectionImage": "Apple",
      "collectionName": "Apple",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 42,
      "collectionImage": "Banana",
      "collectionName": "Banana",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 43,
      "collectionImage": "Carrot",
      "collectionName": "Carrot",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 44,
      "collectionImage": "Dragon Fruit",
      "collectionName": "Dragon Fruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 45,
      "collectionImage": "Elderberry",
      "collectionName": "Elderberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 46,
      "collectionImage": "Fig",
      "collectionName": "Fig",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 47,
      "collectionImage": "Guava",
      "collectionName": "Guava",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 48,
      "collectionImage": "Honeydew",
      "collectionName": "Honeydew",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 49,
      "collectionImage": "Indian Plum",
      "collectionName": "Indian Plum",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 50,
      "collectionImage": "Jackfruit",
      "collectionName": "Jackfruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 51,
      "collectionImage": "Kiwi",
      "collectionName": "Kiwi",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 52,
      "collectionImage": "Lemon",
      "collectionName": "Lemon",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 53,
      "collectionImage": "Mango",
      "collectionName": "Mango",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 54,
      "collectionImage": "Nectarine",
      "collectionName": "Nectarine",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 55,
      "collectionImage": "Orange",
      "collectionName": "Orange",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 56,
      "collectionImage": "Papaya",
      "collectionName": "Papaya",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 57,
      "collectionImage": "Quince",
      "collectionName": "Quince",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 58,
      "collectionImage": "Rambutan",
      "collectionName": "Rambutan",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 59,
      "collectionImage": "Strawberry",
      "collectionName": "Strawberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 60,
      "collectionImage": "Tomato",
      "collectionName": "Tomato",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 61,
      "collectionImage": "Apple",
      "collectionName": "Apple",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 62,
      "collectionImage": "Banana",
      "collectionName": "Banana",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 63,
      "collectionImage": "Carrot",
      "collectionName": "Carrot",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 64,
      "collectionImage": "Dragon Fruit",
      "collectionName": "Dragon Fruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 65,
      "collectionImage": "Elderberry",
      "collectionName": "Elderberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 66,
      "collectionImage": "Fig",
      "collectionName": "Fig",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 67,
      "collectionImage": "Guava",
      "collectionName": "Guava",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 68,
      "collectionImage": "Honeydew",
      "collectionName": "Honeydew",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 69,
      "collectionImage": "Indian Plum",
      "collectionName": "Indian Plum",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 70,
      "collectionImage": "Jackfruit",
      "collectionName": "Jackfruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 71,
      "collectionImage": "Kiwi",
      "collectionName": "Kiwi",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 72,
      "collectionImage": "Lemon",
      "collectionName": "Lemon",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 73,
      "collectionImage": "Mango",
      "collectionName": "Mango",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 74,
      "collectionImage": "Nectarine",
      "collectionName": "Nectarine",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 75,
      "collectionImage": "Orange",
      "collectionName": "Orange",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 76,
      "collectionImage": "Papaya",
      "collectionName": "Papaya",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 77,
      "collectionImage": "Quince",
      "collectionName": "Quince",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 78,
      "collectionImage": "Rambutan",
      "collectionName": "Rambutan",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 79,
      "collectionImage": "Strawberry",
      "collectionName": "Strawberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 80,
      "collectionImage": "Tomato",
      "collectionName": "Tomato",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 81,
      "collectionImage": "Apple",
      "collectionName": "Apple",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 82,
      "collectionImage": "Banana",
      "collectionName": "Banana",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 83,
      "collectionImage": "Carrot",
      "collectionName": "Carrot",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 84,
      "collectionImage": "Dragon Fruit",
      "collectionName": "Dragon Fruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 85,
      "collectionImage": "Elderberry",
      "collectionName": "Elderberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 86,
      "collectionImage": "Fig",
      "collectionName": "Fig",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 87,
      "collectionImage": "Guava",
      "collectionName": "Guava",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 88,
      "collectionImage": "Honeydew",
      "collectionName": "Honeydew",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 89,
      "collectionImage": "Indian Plum",
      "collectionName": "Indian Plum",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 90,
      "collectionImage": "Jackfruit",
      "collectionName": "Jackfruit",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 91,
      "collectionImage": "Kiwi",
      "collectionName": "Kiwi",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 92,
      "collectionImage": "Lemon",
      "collectionName": "Lemon",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 93,
      "collectionImage": "Mango",
      "collectionName": "Mango",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 94,
      "collectionImage": "Nectarine",
      "collectionName": "Nectarine",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 95,
      "collectionImage": "Orange",
      "collectionName": "Orange",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 96,
      "collectionImage": "Papaya",
      "collectionName": "Papaya",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 97,
      "collectionImage": "Quince",
      "collectionName": "Quince",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 98,
      "collectionImage": "Rambutan",
      "collectionName": "Rambutan",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 99,
      "collectionImage": "Strawberry",
      "collectionName": "Strawberry",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    },
    {
      "collectionID": 100,
      "collectionImage": "Tomato",
      "collectionName": "Tomato",
      "collectionIsPromoted": true,
      "collectionDescription": "Lorem ipsum docet"
    }
  ])

  const [currentPage, setPage] = useState(1);
  
  var perPage = 8
  var pages = []
  var numberOfPages = 1
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    const newFilteredData = data.filter(item =>
      item.collectionName.toLowerCase().includes(query)
    );

    setFilteredData(newFilteredData);
  };

  function paginate(filteredData) {
    const from = (currentPage - 1) * perPage
    const to = currentPage * perPage
    return filteredData.slice(from, to)
  }

  function setPages() {
    numberOfPages = Math.ceil(filteredData.length / perPage)
    for (let index = 1; index <= numberOfPages; index++) {
      pages.push(index)
    }
  }

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

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
        <input 
          type="search" 
          placeholder="Search collections..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </label>
    </div>


    <div className="flex justify-center flex-wrap gap-16 p-2 place-items-center grid grid-cols-2">
      {(filteredData.length) > 0 ? (
        paginate(filteredData).map((data, index) => (
          <CollectionsCard collectionID={data.collectionID} collectionImage={data.collectionImage} collectionName={data.collectionName} collectionIsPromoted={data.collectionIsPromoted} collectionDescription={data.collectionDescription} />
        ))
      ) : (
        <span>No results found.</span>
      )}
    </div>
    
    <div className="join p-8 flex justify-center place-items-center">
      {(currentPage != 1) ? <button className="join-item btn" onClick={() => handlePageChange(currentPage - 1)}>«</button> : <button className="join-item btn btn-disabled">«</button>}
      {pages.map(page => (
        <button className={(currentPage != page ? "join-item btn" : "join-item btn btn-disabled")} onClick={() => handlePageChange(page)}>{page}</button>
      ))}
      {(currentPage != numberOfPages) ? <button className="join-item btn" onClick={() => handlePageChange(currentPage + 1)}>»</button> : <button className="join-item btn btn-disabled">»</button>}
    </div>

  </div>
  )
}

export default CollectionsContent