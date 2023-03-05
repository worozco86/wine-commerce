import React from 'react'
import { useState, useEffect } from 'react'
import Data from '../data.json'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailConteiner = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  const itemFilter = Data.filter((item) => item.id == id);



  return (
    <ItemDetail item={Data}/>
  )
}

export default ItemDetailConteiner