import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListConteiner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./data.json');
      const jsonData = await response.json();
      setData(jsonData);
      console.log("data.json")
    }

    fetchData();
  }, []);
  return (
    <ItemList/>
  )
}

export default ItemListConteiner