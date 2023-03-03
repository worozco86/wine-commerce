import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';


const ItemListConteiner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../data.json');
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
    <ItemList items={data} />
    </div>
  )
}

export default ItemListConteiner