import React, { useState } from 'react'
import ProductsCard from './ProductsCard'

const ProductsContent = () => {
  var data = []

  data.push.apply(data, [
    {
      "productID": 1,
      "productImage": "Apple",
      "productName": "Apple",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection1"
    },
    {
      "productID": 2,
      "productImage": "Banana",
      "productName": "Banana",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection2"
    },
    {
      "productID": 3,
      "productImage": "Carrot",
      "productName": "Carrot",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection3"
    },
    {
      "productID": 4,
      "productImage": "Dragon Fruit",
      "productName": "Dragon Fruit",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection4"
    },
    {
      "productID": 5,
      "productImage": "Elderberry",
      "productName": "Elderberry",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection5"
    },
    {
      "productID": 6,
      "productImage": "Fig",
      "productName": "Fig",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection6"
    },
    {
      "productID": 7,
      "productImage": "Guava",
      "productName": "Guava",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection7"
    },
    {
      "productID": 8,
      "productImage": "Honeydew",
      "productName": "Honeydew",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection8"
    },
    {
      "productID": 9,
      "productImage": "Indian Plum",
      "productName": "Indian Plum",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection9"
    },
    {
      "productID": 10,
      "productImage": "Jackfruit",
      "productName": "Jackfruit",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection10"
    },
    {
      "productID": 11,
      "productImage": "Kiwi",
      "productName": "Kiwi",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection11"
    },
    {
      "productID": 12,
      "productImage": "Lemon",
      "productName": "Lemon",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection12"
    },
    {
      "productID": 13,
      "productImage": "Mango",
      "productName": "Mango",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection13"
    },
    {
      "productID": 14,
      "productImage": "Nectarine",
      "productName": "Nectarine",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection14"
    },
    {
      "productID": 15,
      "productImage": "Orange",
      "productName": "Orange",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection15"
    },
    {
      "productID": 16,
      "productImage": "Papaya",
      "productName": "Papaya",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection16"
    },
    {
      "productID": 17,
      "productImage": "Quince",
      "productName": "Quince",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection17"
    },
    {
      "productID": 18,
      "productImage": "Rambutan",
      "productName": "Rambutan",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection18"
    },
    {
      "productID": 19,
      "productImage": "Strawberry",
      "productName": "Strawberry",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection19"
    },
    {
      "productID": 20,
      "productImage": "Tomato",
      "productName": "Tomato",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection20"
    },
    {
      "productID": 21,
      "productImage": "Apple",
      "productName": "Apple",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection1"
    },
    {
      "productID": 22,
      "productImage": "Banana",
      "productName": "Banana",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection2"
    },
    {
      "productID": 23,
      "productImage": "Carrot",
      "productName": "Carrot",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection3"
    },
    {
      "productID": 24,
      "productImage": "Dragon Fruit",
      "productName": "Dragon Fruit",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection4"
    },
    {
      "productID": 25,
      "productImage": "Elderberry",
      "productName": "Elderberry",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection5"
    },
    {
      "productID": 26,
      "productImage": "Fig",
      "productName": "Fig",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection6"
    },
    {
      "productID": 27,
      "productImage": "Guava",
      "productName": "Guava",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection7"
    },
    {
      "productID": 28,
      "productImage": "Honeydew",
      "productName": "Honeydew",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection8"
    },
    {
      "productID": 29,
      "productImage": "Indian Plum",
      "productName": "Indian Plum",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection9"
    },
    {
      "productID": 30,
      "productImage": "Jackfruit",
      "productName": "Jackfruit",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection10"
    },
    {
      "productID": 31,
      "productImage": "Kiwi",
      "productName": "Kiwi",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection11"
    },
    {
      "productID": 32,
      "productImage": "Lemon",
      "productName": "Lemon",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection12"
    },
    {
      "productID": 33,
      "productImage": "Mango",
      "productName": "Mango",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection13"
    },
    {
      "productID": 34,
      "productImage": "Nectarine",
      "productName": "Nectarine",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection14"
    },
    {
      "productID": 35,
      "productImage": "Orange",
      "productName": "Orange",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection15"
    },
    {
      "productID": 36,
      "productImage": "Papaya",
      "productName": "Papaya",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection16"
    },
    {
      "productID": 37,
      "productImage": "Quince",
      "productName": "Quince",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection17"
    },
    {
      "productID": 38,
      "productImage": "Rambutan",
      "productName": "Rambutan",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection18"
    },
    {
      "productID": 39,
      "productImage": "Strawberry",
      "productName": "Strawberry",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection19"
    },
    {
      "productID": 40,
      "productImage": "Tomato",
      "productName": "Tomato",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection20"
    },
    {
      "productID": 41,
      "productImage": "Apple",
      "productName": "Apple",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection1"
    },
    {
      "productID": 42,
      "productImage": "Banana",
      "productName": "Banana",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection2"
    },
    {
      "productID": 43,
      "productImage": "Carrot",
      "productName": "Carrot",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection3"
    },
    {
      "productID": 44,
      "productImage": "Dragon Fruit",
      "productName": "Dragon Fruit",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection4"
    },
    {
      "productID": 45,
      "productImage": "Elderberry",
      "productName": "Elderberry",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection5"
    },
    {
      "productID": 46,
      "productImage": "Fig",
      "productName": "Fig",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection6"
    },
    {
      "productID": 47,
      "productImage": "Guava",
      "productName": "Guava",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection7"
    },
    {
      "productID": 48,
      "productImage": "Honeydew",
      "productName": "Honeydew",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection8"
    },
    {
      "productID": 49,
      "productImage": "Indian Plum",
      "productName": "Indian Plum",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection9"
    },
    {
      "productID": 50,
      "productImage": "Jackfruit",
      "productName": "Jackfruit",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection10"
    },
    {
      "productID": 51,
      "productImage": "Kiwi",
      "productName": "Kiwi",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection11"
    },
    {
      "productID": 52,
      "productImage": "Lemon",
      "productName": "Lemon",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection12"
    },
    {
      "productID": 53,
      "productImage": "Mango",
      "productName": "Mango",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection13"
    },
    {
      "productID": 54,
      "productImage": "Nectarine",
      "productName": "Nectarine",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection14"
    },
    {
      "productID": 55,
      "productImage": "Orange",
      "productName": "Orange",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection15"
    },
    {
      "productID": 56,
      "productImage": "Papaya",
      "productName": "Papaya",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection16"
    },
    {
      "productID": 57,
      "productImage": "Quince",
      "productName": "Quince",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection17"
    },
    {
      "productID": 58,
      "productImage": "Rambutan",
      "productName": "Rambutan",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection18"
    },
    {
      "productID": 59,
      "productImage": "Strawberry",
      "productName": "Strawberry",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection19"
    },
    {
      "productID": 60,
      "productImage": "Tomato",
      "productName": "Tomato",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection20"
    },
    {
      "productID": 61,
      "productImage": "Apple",
      "productName": "Apple",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection1"
    },
    {
      "productID": 62,
      "productImage": "Banana",
      "productName": "Banana",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection2"
    },
    {
      "productID": 63,
      "productImage": "Carrot",
      "productName": "Carrot",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection3"
    },
    {
      "productID": 64,
      "productImage": "Dragon Fruit",
      "productName": "Dragon Fruit",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection4"
    },
    {
      "productID": 65,
      "productImage": "Elderberry",
      "productName": "Elderberry",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection5"
    },
    {
      "productID": 66,
      "productImage": "Fig",
      "productName": "Fig",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection6"
    },
    {
      "productID": 67,
      "productImage": "Guava",
      "productName": "Guava",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection7"
    },
    {
      "productID": 68,
      "productImage": "Honeydew",
      "productName": "Honeydew",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection8"
    },
    {
      "productID": 69,
      "productImage": "Indian Plum",
      "productName": "Indian Plum",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection9"
    },
    {
      "productID": 70,
      "productImage": "Jackfruit",
      "productName": "Jackfruit",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection10"
    },
    {
      "productID": 71,
      "productImage": "Kiwi",
      "productName": "Kiwi",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection11"
    },
    {
      "productID": 72,
      "productImage": "Lemon",
      "productName": "Lemon",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection12"
    },
    {
      "productID": 73,
      "productImage": "Mango",
      "productName": "Mango",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection13"
    },
    {
      "productID": 74,
      "productImage": "Nectarine",
      "productName": "Nectarine",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection14"
    },
    {
      "productID": 75,
      "productImage": "Orange",
      "productName": "Orange",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection15"
    },
    {
      "productID": 76,
      "productImage": "Papaya",
      "productName": "Papaya",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection16"
    },
    {
      "productID": 77,
      "productImage": "Quince",
      "productName": "Quince",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection17"
    },
    {
      "productID": 78,
      "productImage": "Rambutan",
      "productName": "Rambutan",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection18"
    },
    {
      "productID": 79,
      "productImage": "Strawberry",
      "productName": "Strawberry",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection19"
    },
    {
      "productID": 80,
      "productImage": "Tomato",
      "productName": "Tomato",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection20"
    },
    {
      "productID": 81,
      "productImage": "Apple",
      "productName": "Apple",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection1"
    },
    {
      "productID": 82,
      "productImage": "Banana",
      "productName": "Banana",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection2"
    },
    {
      "productID": 83,
      "productImage": "Carrot",
      "productName": "Carrot",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection3"
    },
    {
      "productID": 84,
      "productImage": "Dragon Fruit",
      "productName": "Dragon Fruit",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection4"
    },
    {
      "productID": 85,
      "productImage": "Elderberry",
      "productName": "Elderberry",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection5"
    },
    {
      "productID": 86,
      "productImage": "Fig",
      "productName": "Fig",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection6"
    },
    {
      "productID": 87,
      "productImage": "Guava",
      "productName": "Guava",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection7"
    },
    {
      "productID": 88,
      "productImage": "Honeydew",
      "productName": "Honeydew",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection8"
    },
    {
      "productID": 89,
      "productImage": "Indian Plum",
      "productName": "Indian Plum",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection9"
    },
    {
      "productID": 90,
      "productImage": "Jackfruit",
      "productName": "Jackfruit",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection10"
    },
    {
      "productID": 91,
      "productImage": "Kiwi",
      "productName": "Kiwi",
      "productIsPromoted": true,
      "productCost": 100,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection11"
    },
    {
      "productID": 92,
      "productImage": "Lemon",
      "productName": "Lemon",
      "productIsPromoted": true,
      "productCost": 200,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection12"
    },
    {
      "productID": 93,
      "productImage": "Mango",
      "productName": "Mango",
      "productIsPromoted": true,
      "productCost": 300,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection13"
    },
    {
      "productID": 94,
      "productImage": "Nectarine",
      "productName": "Nectarine",
      "productIsPromoted": true,
      "productCost": 400,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection14"
    },
    {
      "productID": 95,
      "productImage": "Orange",
      "productName": "Orange",
      "productIsPromoted": true,
      "productCost": 500,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection15"
    },
    {
      "productID": 96,
      "productImage": "Papaya",
      "productName": "Papaya",
      "productIsPromoted": true,
      "productCost": 600,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection16"
    },
    {
      "productID": 97,
      "productImage": "Quince",
      "productName": "Quince",
      "productIsPromoted": true,
      "productCost": 700,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection17"
    },
    {
      "productID": 98,
      "productImage": "Rambutan",
      "productName": "Rambutan",
      "productIsPromoted": true,
      "productCost": 800,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection18"
    },
    {
      "productID": 99,
      "productImage": "Strawberry",
      "productName": "Strawberry",
      "productIsPromoted": true,
      "productCost": 900,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection19"
    },
    {
      "productID": 100,
      "productImage": "Tomato",
      "productName": "Tomato",
      "productIsPromoted": true,
      "productCost": 1000,
      "productDescription": "Lorem ipsum docet",
      "productCollection": "TestCollection20"
    }
  ])

  const [currentPage, setPage] = useState(1);
  
  var perPage = 24
  var pages = []
  var numberOfPages = 1
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    const newFilteredData = data.filter(item =>
      item.productName.toLowerCase().includes(query)
    );

    console.log(newFilteredData)
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
      <h1 className="text-4xl font-bold p-2 text-center">Products</h1>

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
            placeholder="Search products..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 place-items-center">
        {(filteredData.length) > 0 ? (
          paginate(filteredData).map((data, index) => (
            <ProductsCard productID={data.productID} productImage={data.productImage} productName={data.productName} productIsPromoted={data.productIsPromoted} productCost={data.productCost} productDescription={data.productDescription} productCollection={data.productCollection}/>
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

export default ProductsContent