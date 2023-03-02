import React from 'react'
import Item from 'react'


const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div>
      {items?.map(item => (
        <Item 
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          stock={item.stock}
          category={item.category}
        />
      ))}
    </div>  
  );
};

export default ItemList;
