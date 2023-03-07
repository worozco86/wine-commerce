import React, { useState, useEffect } from 'react';
import Data from '../../public/data.json';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = Data.find((item) => item.id === parseInt(id));
    setItem(foundItem);
    
    
  }, [id]);
  console.log(item)
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;