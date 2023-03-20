import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div className="itemDiv">
      {items?.map(item => (
         <Item 
          key={item.id}
          img={item.img}
          id={item.id}
          name={item.nombre}
          description={item.descripcion}
          price={item.precio}
          stock={item.stock}
          category={item.categoria}
        />
      ))}
    </div>  
  );
};

export default ItemList;
