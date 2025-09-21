import React, { useState } from 'react'
import CollectionsCard from './CollectionsCard'
import { useLoaderData } from 'react-router-dom';

const CollectionsContent = () => {
  const collectionsData = useLoaderData();

  const [currentPage, setPage] = useState(1);
  
  var perPage = 8
  var pages = []
  var numberOfPages = 1
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(collectionsData);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    const newFilteredData = collectionsData.filter(item =>
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

export const collectionsLoader = async ()=> {
  const res = await fetch("http://localhost:5000/collections");
  return res.json()
}